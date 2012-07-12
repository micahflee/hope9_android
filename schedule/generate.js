var fs = require('fs');

// write the notice
var notice = {notice:"Have fun at HOPE Number 9! And make sure to check out Privacy Tricks for Activist Web Developers :)."};
fs.open('notice.json', 'w', '0666', function(err, fd){
  if(err) throw(err);
  var buffer = JSON.stringify(notice);
  fs.write(fd, buffer, 0, notice.length, null, function(err, written, buffer){
    if(err) throw(err);
    console.log("Successfully wrote "+written+" bytes of the notice");
  });
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

fs.open('schedule.json', 'w', '0666', function(err, fd){
  if(err) throw(err);
  var buffer = JSON.stringify(schedule);
  fs.write(fd, buffer, 0, buffer.length, null, function(err, written, buffer){
    if(err) throw(err);
    console.log("Successfully wrote "+written+" bytes of the schedule");
  });
});

