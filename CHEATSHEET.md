# The Well Shrewsbury - Admin Cheatsheet

A quick "where is it / how do I" reference for running the website.

## Hostinger (hPanel)

### Environment variables (where the live site's keys live)
1. Log into hPanel.
2. Click Websites, then thewellshrewsbury.com.
3. In the left menu, click Environment variables.
Used for the VITE_ keys the live site needs (for example VITE_WEB3FORMS_KEY).
The Name and the Value must be separate. After any change here, Redeploy.

### Redeploy the live site
- On the site Dashboard, top right, click Redeploy.
- Or push a commit to GitHub (it auto-deploys).
- Always Redeploy after changing an environment variable; variables only take effect on a new build.

### Deployment log / status
- The site Dashboard shows Last deployment with a State (look for "Completed").
- Left menu, Deployments, shows the full history.

### Church email inbox (info@thewellshrewsbury.com)
- Webmail: https://mail.hostinger.com  then log in as info@thewellshrewsbury.com.
- Or in hPanel, left menu, Emails.

## The website code (in Cursor)

### Run the site on your own computer
- Open the project in Cursor. In the terminal type: npm run dev
- Open the localhost link it prints (for example http://localhost:3000).

### Push changes live (works even when the Cursor AI agent is out of free usage)
In Cursor's terminal, one line at a time:
    git add -A
    git commit -m "short description of the change"
    git push
Pushing to the main branch auto-deploys to Hostinger. The terminal has no AI usage limit.
If it complains about index.lock: run  del .git\index.lock  then try the commit again.

### Images
- Put every image in the folder public/images and reference it as /images/filename.
- Use lowercase names with no spaces (the live server is case-sensitive).

### Local key file
- .env.local in the project root holds keys for local testing only (the live site ignores it).
- Format, one per line, note the equals sign and no spaces:
    VITE_WEB3FORMS_KEY=your-key-here

## Web3Forms (the Plan Your Visit and Contact forms)

- Dashboard: https://web3forms.com  then log in.
- Access key currently in use: d5d0a4cb-eae7-4645-9e4a-8bb2c517485a
- Change where submissions are emailed: in the form's settings set the recipient (currently info@thewellshrewsbury.com).
- hCaptcha: leave it OFF. The website has no captcha box, so turning hCaptcha on blocks every submission. Spam is already handled by the built-in honeypot.
- For the forms to work everywhere, the same key must be in three places: local .env.local, Hostinger Environment variables, and the Web3Forms form itself.

## Quick facts
- Repo: github.com/Daveflyon/The-Well-Shrewsbury-Website  (branch: main)
- Live site: thewellshrewsbury.com
- Deploy chain: push to main, Hostinger auto-builds with Vite, live in a minute or two.
