# Pattern Problem Solving Approach

## Step 1: Count the Rows

* How many rows are there?
* Outer loop always represents rows.

## Step 2: Analyze One Row

* Focus on only one row at a time.
* Don't look at the entire pattern.

## Step 3: Count What is Printed

* How many stars, numbers, or characters are printed in the current row?

## Step 4: Find the Relation

* Express columns in terms of row number.
* Examples:

  * stars = row
  * stars = n - row + 1
  * numbers = row

## Step 5: Check for Spaces

* Is the pattern left-aligned, right-aligned, pyramid, or diamond?
* Count spaces separately.

## Step 6: Create a Table (Optional)

* Write:

  * Row | Spaces | Stars
* Helps find formulas quickly.

## Step 7: Dry Run

* Manually calculate values for:

  * row = 1
  * row = 2
  * row = 3
  * ...
* Verify your logic before coding.

## Step 8: Write Loops

* Outer loop → Rows
* Inner loop(s) → Spaces, Stars, Numbers

## Step 9: Build Row by Row

* Ask:

  * What should Row 1 print?
  * What should Row 2 print?
  * What should Row 3 print?

## Step 10: Convert Logic into Code

* Row logic → Loop conditions
* Formula → Inner loop limits

---

# Golden Rule

Think Row by Row, not Pattern by Pattern.

```text
Pattern
    ↓
Rows
    ↓
Spaces + Stars/Numbers
    ↓
Formula
    ↓
Loops
    ↓
Code
```
