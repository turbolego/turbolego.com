### Chat Codes

In december 2011 i figured a way to send large "smileys" in the facebook messenger chat years before "stickers" was a thing.

I made the facebook page [Chat Codes](https://www.facebook.com/ChatCodes) and a wordpress blog on [turbolego.com](https://turbolego.com/) to organize development of browser extensions, mobile apps and desktop apps to automate this process.

This GitHub repository is a static archive of [turbolego.com](https://turbolego.com/) since there's no reason to continue the development of this old method since facebook has implemented stickers and gifs in messenger now.

The costs for hosting [turbolego.com](https://turbolego.com/) has gone up year by year and hosting this static archive on GitHub Pages is free, so therefore i have archived it here.

And since GitHub Pages support custom domains, I'm not sure if anyone noticed lol

### How to archive your old wordpress page and host it for free on GitHub Pages

I used the wordpress plugin [All-in-One WP Migration and Backup](https://wordpress.org/plugins/all-in-one-wp-migration/) to export the wordpress blog as one .wpress file.

Then i installed [XAMPP](https://www.apachefriends.org/) to run wordpress locally on my own computer.

After installing wordpress locally on my computer, i installed the [All-in-One WP Migration and Backup](https://wordpress.org/plugins/all-in-one-wp-migration/) plugin and imported my .wpress file.

I then ran the [Simply Static](https://wordpress.org/plugins/simply-static/) plugin to convert my wordpress blog to a static webpage that can be hosted on GitHub Pages.

I only took the extra steps with exporting the .wpress file, installing XAMPP and wordpress locally before running Simply Static because i got some weird errors.

If you want to convert your old wordpress blog to a static webpage that can be hosted on GitHub Pages, try running the Simply Static -plugin first, you might be lucky and don't have to mess with XAMPP.
