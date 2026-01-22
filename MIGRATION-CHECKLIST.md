# ====================================================
# MIGRATION CHECKLIST
# ====================================================
# Use this to track your migration progress
# ====================================================

## PRE-MIGRATION (Local)

- [ ] Download WordPress backup (✓ already have .tar.gz)
- [ ] Install Node.js and npm
- [ ] Run `npm install` in project
- [ ] Test Astro locally: `npm run dev`
- [ ] Verify API connection to live site works
- [ ] Test blog post pages load correctly
- [ ] Test images display

## SERVER PREPARATION

- [ ] Create full backup of live site
  - [ ] Files (tar.gz)
  - [ ] Database (SQL dump)
  - [ ] Download backups to local machine
- [ ] Test SSH/FTP access to server
- [ ] Note current WordPress version
- [ ] Document any custom plugins/themes

## PHASE 1: MOVE WORDPRESS TO /admin

- [ ] SSH into server or open cPanel Terminal
- [ ] Navigate to public_html/
- [ ] Create backup directory
- [ ] Run migration script OR manual steps:
  - [ ] Create `/admin` directory
  - [ ] Move wp-admin/ to admin/
  - [ ] Move wp-content/ to admin/
  - [ ] Move wp-includes/ to admin/
  - [ ] Move all .php files except wp-config.php to admin/
  - [ ] Keep wp-config.php in root
- [ ] Update wp-config.php:
  - [ ] Add WP_HOME: 'https://cookmushroom.com/admin'
  - [ ] Add WP_SITEURL: 'https://cookmushroom.com/admin'
- [ ] Fix /admin/index.php:
  - [ ] Change require path to '../wp-blog-header.php'
- [ ] Upload /server-config/admin-htaccess.conf to /admin/.htaccess

## PHASE 2: VERIFY WORDPRESS IN /admin

- [ ] Visit https://cookmushroom.com/admin/wp-admin
- [ ] Login to WordPress admin
- [ ] Check Settings → General (URLs should show /admin)
- [ ] Test creating a new post
- [ ] Test uploading an image
- [ ] Verify plugins work
- [ ] Test REST API: https://cookmushroom.com/wp-json
- [ ] Test API endpoint: https://cookmushroom.com/wp-json/wp/v2/posts

## PHASE 3: BUILD & DEPLOY ASTRO

- [ ] On local machine: `npm run build`
- [ ] Verify dist/ folder created
- [ ] Test build locally: `npm run preview`
- [ ] Upload dist/ contents to server root:
  - Method (choose one):
    - [ ] FTP/SFTP
    - [ ] cPanel File Manager
    - [ ] rsync via SSH
- [ ] Upload server-config/root-htaccess.conf as /.htaccess
- [ ] Verify files uploaded:
  - [ ] index.html in root
  - [ ] _astro/ folder exists
  - [ ] .htaccess in root

## PHASE 4: TESTING

- [ ] Test homepage: https://cookmushroom.com
- [ ] Test blog listing: https://cookmushroom.com/blog
- [ ] Test individual post (pick any): https://cookmushroom.com/blog/[slug]
- [ ] Verify images load correctly
- [ ] Check mobile responsive design
- [ ] Test on different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Mobile browser
- [ ] Verify WordPress admin still works: /admin/wp-admin
- [ ] Test creating new post in WP admin
- [ ] Rebuild Astro and verify new post appears

## PHASE 5: SEO & PERFORMANCE

- [ ] Check old URLs still work or redirect properly
- [ ] Submit new sitemap to Google Search Console
- [ ] Test page speed: https://pagespeed.web.dev/
- [ ] Verify meta tags and Open Graph tags
- [ ] Test social media sharing
- [ ] Check for broken links
- [ ] Verify robots.txt
- [ ] Set up 301 redirects if needed

## PHASE 6: SECURITY

- [ ] Change WordPress admin password
- [ ] Install security plugin (Wordfence, etc.)
- [ ] Enable 2FA on WordPress admin
- [ ] Restrict /admin/ by IP (optional)
- [ ] Disable unused plugins
- [ ] Update all plugins and themes
- [ ] Test XML-RPC is disabled
- [ ] Enable SSL (if not already)
- [ ] Set up automatic backups

## POST-MIGRATION

- [ ] Monitor site for 24-48 hours
- [ ] Check error logs
- [ ] Monitor traffic in Google Analytics
- [ ] Test forms/contact methods
- [ ] Verify email notifications work
- [ ] Document any issues and solutions
- [ ] Keep old backup for 30 days
- [ ] Celebrate! 🎉

## ROLLBACK PLAN (IF NEEDED)

- [ ] Stop: Don't panic
- [ ] Keep Astro files in a temporary folder
- [ ] Restore WordPress to root from backup:
  ```bash
  rm -rf admin/
  tar -xzf backup.tar.gz
  ```
- [ ] Restore database if modified
- [ ] Remove WP_HOME and WP_SITEURL from wp-config.php
- [ ] Restore original .htaccess
- [ ] Test site is back to normal
- [ ] Investigate what went wrong
- [ ] Fix issues and try again

## NOTES & ISSUES

Date: _______________

Issues encountered:
- 
- 
- 

Solutions:
- 
- 
- 

Performance before:
- Load time: _______
- PageSpeed score: _______

Performance after:
- Load time: _______
- PageSpeed score: _______

## CONTACTS

- Hosting support: _______________
- DNS provider: _______________
- Domain registrar: _______________
