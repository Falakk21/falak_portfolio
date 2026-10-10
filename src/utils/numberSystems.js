/**
 * Number Systems Conversion Engine
 * Supports Binary (2), Octal (8), Decimal (10), Hexadecimal (16)
 * Uses BigInt for arbitrary-precision integers and exact fractional algorithms.
 */

export const BASES = {
  2: { name: 'Binary', radix: 2, prefix: '0b', regex: /^[01]+$/, chars: '01', desc: 'Base 2 (Bits: 0, 1)' },
  8: { name: 'Octal', radix: 8, prefix: '0o', regex: /^[0-7]+$/, chars: '01234567', desc: 'Base 8 (Digits: 0–7)' },
  10: { name: 'Decimal', radix: 10, prefix: '', regex: /^[0-9]+$/, chars: '0123456789', desc: 'Base 10 (Digits: 0–9)' },
  16: { name: 'Hexadecimal', radix: 16, prefix: '0x', regex: /^[0-9A-Fa-f]+$/, chars: '0123456789ABCDEF', desc: 'Base 16 (0–9, A–F)' },
};

/**
 * Validate input string for a given base.
 * Supports optional leading negative sign and optional single decimal point.
 */
export function validateInput(rawInput, base) {
  if (!rawInput || typeof rawInput !== 'string') {
    return { valid: false, error: 'Please enter a value to convert.' };
  }

  const cleaned = rawInput.trim();
  if (cleaned === '') {
    return { valid: false, error: 'Input cannot be blank.' };
  }

  // Handle optional negative sign
  const isNegative = cleaned.startsWith('-');
  const unsigned = isNegative ? cleaned.slice(1) : (cleaned.startsWith('+') ? cleaned.slice(1) : cleaned);

  if (unsigned === '') {
    return { valid: false, error: 'Input must contain digits after the sign.' };
  }

  // Check radix point
  const parts = unsigned.split('.');
  if (parts.length > 2) {
    return { valid: false, error: 'Only one radix point (.) is permitted.' };
  }

  const intPart = parts[0];
  const fracPart = parts.length === 2 ? parts[1] : '';

  if (intPart === '' && fracPart === '') {
    return { valid: false, error: 'Input must contain valid digits.' };
  }

  const allowedChars = BASES[base].chars;
  const upperInt = intPart.toUpperCase();
  const upperFrac = fracPart.toUpperCase();

  for (let ch of upperInt) {
    if (!allowedChars.includes(ch)) {
      return {
        valid: false,
        error: `Invalid character '${ch}' for ${BASES[base].name}. Allowed characters: ${allowedChars}`,
      };
    }
  }

  for (let ch of upperFrac) {
    if (!allowedChars.includes(ch)) {
      return {
        valid: false,
        error: `Invalid fractional character '${ch}' for ${BASES[base].name}. Allowed: ${allowedChars}`,
      };
    }
  }

  return { valid: true, isNegative, intPart: upperInt || '0', fracPart: upperFrac };
}

/**
 * Convert integer using BigInt
 */
function parseBigIntFromBase(str, base) {
  let result = 0n;
  const b = BigInt(base);
  for (let i = 0; i < str.length; i++) {
    const digitVal = BigInt(parseInt(str[i], base));
    result = result * b + digitVal;
  }
  return result;
}

/**
 * Convert BigInt to target base
 */
function bigIntToTargetBase(bigIntVal, targetBase) {
  if (bigIntVal === 0n) return '0';
  let val = bigIntVal;
  const b = BigInt(targetBase);
  const chars = '0123456789ABCDEF';
  let out = '';

  while (val > 0n) {
    const rem = Number(val % b);
    out = chars[rem] + out;
    val = val / b;
  }
  return out;
}

/**
 * Convert fractional part
 */
function convertFraction(fracStr, srcBase, tgtBase, maxDigits = 10) {
  if (!fracStr) return '';

  // 1. Convert srcBase fraction to decimal float
  let decimalFrac = 0;
  for (let i = 0; i < fracStr.length; i++) {
    const dVal = parseInt(fracStr[i], srcBase);
    decimalFrac += dVal / Math.pow(srcBase, i + 1);
  }

  // 2. Convert decimal fraction to target base
  const chars = '0123456789ABCDEF';
  let outFrac = '';
  let cur = decimalFrac;

  while (cur > 0 && outFrac.length < maxDigits) {
    cur *= tgtBase;
    const intDigit = Math.floor(cur);
    outFrac += chars[intDigit];
    cur -= intDigit;
    // Break on near-zero precision
    if (cur < 1e-12) break;
  }

  return outFrac;
}

/**
 * Main conversion execution
 */
export function convertNumber(input, srcBase, tgtBase) {
  const validation = validateInput(input, srcBase);
  if (!validation.valid) {
    return { success: false, error: validation.error };
  }

  const { isNegative, intPart, fracPart } = validation;

  if (srcBase === tgtBase) {
    const full = (isNegative ? '-' : '') + intPart + (fracPart ? '.' + fracPart : '');
    return {
      success: true,
      result: full,
      isNegative,
      intPart,
      fracPart,
      steps: [
        {
          title: 'Identity Conversion',
          content: `Source base (${BASES[srcBase].name}) and Target base (${BASES[tgtBase].name}) are identical. No conversion required.`,
        },
      ],
    };
  }

  // 1. Integer conversion
  const decBigInt = parseBigIntFromBase(intPart, srcBase);
  const targetIntPart = bigIntToTargetBase(decBigInt, tgtBase);

  // 2. Fractional conversion
  let targetFracPart = '';
  if (fracPart) {
    targetFracPart = convertFraction(fracPart, srcBase, tgtBase);
  }

  const fullResult = (isNegative ? '-' : '') + targetIntPart + (targetFracPart ? '.' + targetFracPart : '');

  // 3. Step generation for pedagogical clarity
  const steps = generateSteps({
    input,
    srcBase,
    tgtBase,
    intPart,
    fracPart,
    decBigInt,
    targetIntPart,
    targetFracPart,
    isNegative,
  });

  return {
    success: true,
    result: fullResult,
    isNegative,
    srcBase,
    tgtBase,
    intPart,
    fracPart,
    targetIntPart,
    targetFracPart,
    steps,
  };
}

/**
 * Generate mathematical explanation steps based on COA methods
 */
function generateSteps({
  input,
  srcBase,
  tgtBase,
  intPart,
  fracPart,
  decBigInt,
  targetIntPart,
  targetFracPart,
  isNegative,
}) {
  const steps = [];

  // Special direct bit-grouping shortcut if between Binary and (Octal or Hex)
  if (srcBase === 2 && (tgtBase === 8 || tgtBase === 16) && !fracPart) {
    const groupSize = tgtBase === 8 ? 3 : 4;
    const targetName = tgtBase === 8 ? 'Octal (3 bits per digit)' : 'Hexadecimal (4 bits per digit)';
    
    // Pad left with zeros
    const padCount = (groupSize - (intPart.length % groupSize)) % groupSize;
    const padded = '0'.repeat(padCount) + intPart;
    
    const groups = [];
    for (let i = 0; i < padded.length; i += groupSize) {
      const slice = padded.slice(i, i + groupSize);
      const val = parseInt(slice, 2).toString(tgtBase).toUpperCase();
      groups.push({ slice, val });
    }

    steps.push({
      title: `Direct Bit Grouping Method (${BASES[srcBase].name} → ${BASES[tgtBase].name})`,
      method: 'Bit-Grouping (COA Standard)',
      content: `Because ${tgtBase} = 2^${groupSize}, each ${BASES[tgtBase].name} digit directly maps to exactly ${groupSize} binary bits.`,
      groups: groups,
      explanation: `1. Group bits in chunks of ${groupSize} from right to left (padded with leading zeros if needed: "${padded}").\n2. Convert each ${groupSize}-bit chunk to its corresponding ${BASES[tgtBase].name} symbol.`,
    });
    return steps;
  }

  if ((srcBase === 8 || srcBase === 16) && tgtBase === 2 && !fracPart) {
    const groupSize = srcBase === 8 ? 3 : 4;
    const groups = [];
    for (let ch of intPart) {
      const binChunk = parseInt(ch, srcBase).toString(2).padStart(groupSize, '0');
      groups.push({ ch, binChunk });
    }

    steps.push({
      title: `Direct Bit Expansion Method (${BASES[srcBase].name} → Binary)`,
      method: 'Bit-Expansion (COA Standard)',
      content: `Because ${srcBase} = 2^${groupSize}, each digit expands into a ${groupSize}-bit binary representation.`,
      groups: groups.map(g => ({ slice: g.ch, val: g.binChunk })),
      explanation: `Expand every ${BASES[srcBase].name} symbol into its ${groupSize}-bit binary equivalent, then concatenate the sequence.`,
    });
    return steps;
  }

  // General 2-step conversion via Decimal
  // Step A: Positional notation expansion to Decimal
  if (srcBase !== 10) {
    const terms = [];
    const n = intPart.length;
    for (let i = 0; i < n; i++) {
      const digitChar = intPart[i];
      const digitVal = parseInt(digitChar, srcBase);
      const power = n - 1 - i;
      terms.push(`(${digitChar} × ${srcBase}^${power})`);
    }

    steps.push({
      title: `Step 1: Positional Notation Expansion to Decimal (Base 10)`,
      method: 'Positional Polynomial Method',
      formula: `Value = ∑ (digit_i × ${srcBase}^i)`,
      calculation: `${terms.join(' + ')} = ${decBigInt.toString()}₁₀`,
      explanation: `Each digit is multiplied by its positional weight (${srcBase} raised to its place power), then summed together.`,
    });
  } else {
    steps.push({
      title: `Starting Value in Decimal`,
      method: 'Direct Decimal Value',
      calculation: `${decBigInt.toString()}₁₀`,
      explanation: `The initial number is already formatted in Base 10.`,
    });
  }

  // Step B: Successive Division from Decimal to Target Base
  if (tgtBase !== 10) {
    const divisionRows = [];
    let cur = decBigInt;
    const b = BigInt(tgtBase);

    // Limit step table to first 12 divisions to prevent massive tables on huge BigInts
    let count = 0;
    while (cur > 0n && count < 12) {
      const q = cur / b;
      const r = Number(cur % b);
      const symbol = '0123456789ABCDEF'[r];
      divisionRows.push({ quotient: q.toString(), remainder: r, symbol });
      cur = q;
      count++;
    }

    steps.push({
      title: `Step 2: Successive Division / Remainder Method (Base 10 → Base ${tgtBase})`,
      method: 'Division Algorithm',
      divisionRows,
      explanation: `Divide by ${tgtBase} repeatedly. The remainders recorded from bottom to top form the target ${BASES[tgtBase].name} representation: ${targetIntPart}.`,
    });
  }

  // Step C: Fractional expansion if present
  if (fracPart) {
    steps.push({
      title: `Fractional Radix Conversion`,
      method: 'Radix Multiplication Method',
      explanation: `The fractional component .${fracPart} in Base ${srcBase} converts to .${targetFracPart} in Base ${tgtBase} by continuous multiplication by target base ${tgtBase}.`,
    });
  }

  return steps;
}
