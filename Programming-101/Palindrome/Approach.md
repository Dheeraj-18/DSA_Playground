# Digit Manipulation in DSA - First Principles

## Why Does `% 10` Give the Last Digit?

Take a number:

```text
12345
```

We can rewrite it as:

```text
12345 = 1234 × 10 + 5
```

The last digit is the remainder after dividing by 10.

```js
12345 % 10 // 5
```

More examples:

```js
456 % 10  // 6
7821 % 10 // 1
93 % 10   // 3
```

### Mental Model

```text
12345
    ↑
Last Digit
```

Rule:

```text
n % 10 → Extract the last digit
```

---

# Why Does Dividing By 10 Remove The Last Digit?

## Intuition First

Imagine every whole number has a hidden decimal point:

```text
12345.0
```

Now divide by 10:

```text
12345 ÷ 10 = 1234.5
```

Notice what happened:

```text
12345.0
 ↓
1234.5
```

The decimal point moved one position to the left.

Another example:

```text
5678.0
 ↓
567.8
```

Again:

```text
567.8
 ↓
56.78
```

### Important Observation

After dividing by 10:

```text
12345 → 1234.5
```

The last digit is no longer part of the integer.

It has moved after the decimal point.

---

# Why Does Math.floor() Remove The Last Digit?

```js
Math.floor(1234.5)
```

returns:

```js
1234
```

because Math.floor removes everything after the decimal.

```text
1234.5
 ↓
1234
```

Therefore:

```js
Math.floor(12345 / 10)
```

becomes:

```js
1234
```

The last digit is gone.

---

# Mathematical Explanation (The Real Reason)

Our number system is Base 10.

Example:

```text
12345
```

actually means:

```text
1 × 10⁴
+ 2 × 10³
+ 3 × 10²
+ 4 × 10¹
+ 5 × 10⁰
```

---

## Exponent Rule

When dividing powers with the same base:

```text
10ᵃ / 10ᵇ = 10ᵃ⁻ᵇ
```

Dividing by 10 means dividing by:

```text
10¹
```

Therefore:

```text
10⁴ → 10³
10³ → 10²
10² → 10¹
10¹ → 10⁰
10⁰ → 10⁻¹
```

Every exponent decreases by 1.

---

## Apply It To 12345

```text
12345

=
1×10⁴
+2×10³
+3×10²
+4×10¹
+5×10⁰
```

Divide by 10:

```text
=
1×10³
+2×10²
+3×10¹
+4×10⁰
+5×10⁻¹
```

Notice:

```text
5×10⁻¹
=
5 × 0.1
=
0.5
```

So:

```text
12345 ÷ 10
=
1234.5
```

The last digit becomes a decimal fraction.

Then:

```js
Math.floor(1234.5)
```

removes it.

---

# The DSA Pattern

Most number problems follow this structure:

```js
while (n > 0) {
    let digit = n % 10;

    // Process digit

    n = Math.floor(n / 10);
}
```

---

# What Happens In Every Iteration?

Step 1:

```js
digit = n % 10;
```

Extract the last digit.

Step 2:

```js
n = Math.floor(n / 10);
```

Remove the last digit.

Step 3:

Repeat until the number becomes 0.

---

# Example Walkthrough

```js
n = 12345
```

Iteration 1:

```js
digit = 5
n = 1234
```

Iteration 2:

```js
digit = 4
n = 123
```

Iteration 3:

```js
digit = 3
n = 12
```

Iteration 4:

```js
digit = 2
n = 1
```

Iteration 5:

```js
digit = 1
n = 0
```

Done.

---

# Count Digits

```js
let count = 0;

while (n > 0) {
    count++;
    n = Math.floor(n / 10);
}
```

Why it works:

Every iteration removes exactly one digit.

Number of removals = Number of digits.

---

# Sum of Digits

```js
let sum = 0;

while (n > 0) {
    let digit = n % 10;
    sum += digit;

    n = Math.floor(n / 10);
}
```

---

# Product of Digits

```js
let product = 1;

while (n > 0) {
    let digit = n % 10;
    product *= digit;

    n = Math.floor(n / 10);
}
```

---

# Reverse Number

```js
let reverse = 0;

while (n > 0) {
    let digit = n % 10;

    reverse = reverse * 10 + digit;

    n = Math.floor(n / 10);
}
```

---

# Problems That Use This Pattern

* Count Digits
* Reverse Number
* Palindrome Number
* Armstrong Number
* Sum of Digits
* Product of Digits
* Digit Frequency
* Happy Number
* Harshad Number
* Strong Number

---

# Final Mental Models

### Coding Mental Model

```text
% 10
↓
Take the last digit

/ 10
↓
Move decimal left

Math.floor()
↓
Remove decimal part

Result:
Last digit removed
```

### Mathematical Mental Model

```text
Divide by 10
↓
Subtract 1 from every power of 10
↓
10⁰ becomes 10⁻¹
↓
Last digit becomes a decimal fraction
↓
Math.floor removes it
```

### Golden Rule

```js
digit = n % 10;        // Extract last digit

n = Math.floor(n / 10); // Remove last digit
```

Master this pattern and most beginner number-based DSA problems become straightforward.
