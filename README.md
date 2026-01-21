# GitHub Branch Testing Project

A simple web project to practice Git branching workflows.

## How to Use for Branch Testing

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create and Switch to a New Branch
```bash
# Create and switch to a new branch
git checkout -b feature/update-button

# Or use the newer syntax
git switch -c feature/update-button
```

### 3. Make Changes on the New Branch
Try modifying:
- Change the button color in `styles.css`
- Update the greeting message in `script.js`
- Add new features to `index.html`

### 4. Commit Your Changes
```bash
git add .
git commit -m "Update button styling"
```

### 5. Switch Between Branches
```bash
# Go back to main
git checkout main

# Return to feature branch
git checkout feature/update-button
```

### 6. Merge Branches
```bash
# Switch to main branch
git checkout main

# Merge feature branch
git merge feature/update-button
```

## Branch Ideas to Practice

- **feature/dark-mode**: Add dark theme styling
- **feature/new-button**: Add another button with different functionality
- **bugfix/typo**: Fix any typos in the text
- **feature/animations**: Add CSS animations

## Files
- `index.html` - Main HTML structure
- `styles.css` - Styling
- `script.js` - JavaScript functionality
