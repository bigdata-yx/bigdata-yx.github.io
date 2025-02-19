var posts=["posts/pd11.html","posts/pd13.html","posts/pd15.html","posts/pd12.html","posts/968.html","posts/969.html","posts/966.html","posts/967.html","posts/pd14.html","posts/965.html","posts/958.html","posts/959.html","posts/962.html","posts/964.html","posts/fe67.html","posts/fe65.html","posts/fe55.html","posts/fe64.html","posts/fe63.html","posts/fe62.html","posts/fe60.html","posts/fe59.html","posts/fe58.html","posts/fe57.html","posts/fe66.html","posts/fe56.html","posts/fe69.html","posts/fe61.html","posts/fe69.html","posts/fe68.html","posts/yx1.html","posts/fe54.html","posts/fe52.html","posts/fe66.html","posts/nb11.html","posts/nb13.html","posts/nb14.html","posts/3985.html","posts/nb12.html","posts/3992.html","posts/3986.html","posts/3994.html","posts/3987.html","posts/3984.html","posts/3988.html","posts/b2b7.html","posts/3989.html","posts/3991.html","posts/3990.html","posts/fa63.html","posts/b2b6.html","posts/fa64.html","posts/fa65.html","posts/d3ce.html","posts/713b.html","posts/1fef.html","posts/287f.html","posts/e3ea.html","posts/ec39.html","posts/ade7.html","posts/af13.html","posts/5796.html","posts/287f.html","posts/a3f7.html","posts/b9m1.html","posts/h2m8.html","posts/b0a7.html","posts/b9a6.html","posts/p9a7.html","posts/n9a7.html","posts/b9a7.html","posts/d591.html","posts/1083.html","posts/1082.html","posts/1081.html","posts/a403.html","posts/a298.html","posts/a398.html","posts/a299.html","posts/a399.html","posts/a300.html","posts/a400.html","posts/a301.html","posts/a401.html","posts/a302.html","posts/a402.html","posts/dfc4.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"在线添加友联","link":"https://bigdata-yx.github.io/link/edit/master/source/_data/link.yml","avatar":"/imgs/avatar.webp","descr":"大数据在线添加友联地址","siteshot":"/imgs/avatar.webp","color":"vip","tag":"ADD"},{"name":"大数据-主页","link":"https://bigdata-yx.github.io/","avatar":"/imgs/avatar.webp","descr":"大数据的主页By Vue。","siteshot":"https://image.thum.io/get/width/400/crop/800/allowJPG/wait/20/noanimate/https://bigdata-yx.github.io/"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/646cdb372913c.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };