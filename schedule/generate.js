#!/usr/local/bin/node

var fs = require('fs');

// write the notice
var notice = {notice:"I hope you find this app helpful. And make sure to check out my talk, <em>Privacy Tricks for Activist Web Developers</em>, Saturday at 3pm, Nutt.<br><br>- Micah Lee<br>@micahflee<br><br><small>Happy hacking at HOPE9!</small>"};
fs.writeFile('notice.json', JSON.stringify(notice), function(err){
  if(err) throw(err);
  console.log('notice.json written');
});

// write the schedule
var schedule = [
  {
    id: "1337",
    title: "Privacy Tricks for Activist Web Developers",
    description: "Do you care about the privacy of your website’s visitors, but also depend on social media to get your message out? Do you want to protect your visitors’ anonymity in case you or a third party service you use gets subpoenaed? Do you want to be able to get meaningful and pretty analytics without third parties tracking your visitors? Can some kid in a coffee shop really hijack your users’ accounts that easily?<br\><br\>Chances are Google, Facebook, and Twitter know as much about your website’s visitors as you do, IP addresses and user agents are sprinkled about your server’s filesystem, Google Analytics is watching everyone’s every move, and some kid in a coffee shop is already pwning your users. But it doesn’t have to be this way! This technical talk will cover tricks that web developers and sysadmins can use to minimize the privacy problems that plague the modern web.",
    timestamp: 1342278000,
    location: "Nutt",
    speakers: [
      {
        name: "Micah Lee",
        bio: "Micah Lee is the Electronic Frontier Foundation’s web developer. An avid GNU/Linux user, he has been writing code in a variety of languages for a variety of platforms for over a decade. He takes a keen interest in computer security, cryptography, privacy, Free Software, and Internet freedoms."
      }
    ],
  }
];

fs.writeFile('schedule.json', JSON.stringify(schedule), function(err){
  if(err) throw(err);
  console.log('schedule.json written');
});

