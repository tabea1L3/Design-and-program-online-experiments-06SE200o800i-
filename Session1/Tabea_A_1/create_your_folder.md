## Before You Begin:
☐ Git installed (check with `git --version` in TERMINAL) <br>
☐ GitHub account configured in VS Code (https://code.visualstudio.com/docs/sourcecontrol/github)<br>
☐ Repository already cloned to your local machine (follow the slide: Join GitHub)<br>

## 1.2.1 Simply create your own folder under Session1:
1. Copy STARTER folder;
2. Paste it under Session1 folder;
3. Rename the copy folder as your name;
4. Go to VS Code/SOURCE CONTROL;
5. In the Message box, type in some description for the new changes (e.g., my first exercise);
6. Then "Commit" button will be clickable, click on it. If you get notification to ask you to "stage...commit", click yes or always; 
7. Now the "Commit" button becomes "Sync Changes", click on it to push your changes to the github repository; 
8. You may create a fork if asked;<br>
   *What's happening here:
   - If you don't have write access to the main repository, GitHub will 
     automatically suggest creating a fork (your personal copy)
   - This is normal and expected!
   - Go ahead and create your fork. 
9. Congratulations, now you get the gist of exercise workflow!

## Verify Your Success:

### If you created a fork:
1. Go to github.com in your browser
2. Navigate to **YOUR FORK** (github.com/yourusername/repository-name)
3. Find the Session1 folder  
4. Your named folder should be there
5. You've successfully pushed your first commit to YOUR fork!

### If you're working directly on the main repository:
1. Go to github.com in your browser
2. Navigate to the course repository  
3. Find the Session1 folder
4. Your named folder should be there
5. You've successfully pushed your first commit!

## How to find the VS Code/SOURCE CONTROL

Look at the far left side of the VS Code window. There is a vertical bar called the Activity Bar.
The icon is usually the third icon from the top. It looks like a "Y" shaped fork (a Git branch). If you have changes, this icon will display a number (e.g., 99+) indicating how many changes exist.

## If "Your Name" folder already exists:
- Add a number: "Your Name 2", or
- Use date: "Your Name 2025-01-30", or
- Add initial: "M.Smith"

## If you ever have a Git divergence issue, please Merge (Preserve Both Histories)!

when your local main branch and the remote main branch have different commit histories and Git doesn't know how to reconcile them.

In your terminal, try:
<br>
`git config pull.rebase false`
<br>
`git pull origin main`