  async function sendShare() {
   await liff.init({ liffId: "1660688616-gp3JJ6rR" });
console.log(liff.isApiAvailable('shareTargetPicker'));
      const result = await liff.shareTargetPicker([
        {
          "type": "flex",
          "altText": "蓼蓼牌盲選麵包箱放送活動",
          "contents":  {
  "type": "bubble",
  "size": "giga",
  "hero": {
    "type": "image",
    "url": "https://i.imgur.com/DDUkllQ.jpg",
    "size": "full",
    "action": {
      "type": "uri",
      "uri": "https://www.facebook.com/lulubakeryyy/posts/pfbid02RVFt1wEdmRCsLHVMsDUf9nqJJRKDLbz19rNxGHrcrppb9eg7tksoVgnbj45D962Dl"
    },
    "aspectMode": "cover",
    "aspectRatio": "20:13"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "蓼蓼麵包小賣所 lùlù bakery",
        "weight": "bold",
        "size": "xl",
        "color": "#9d6d40"
      },
      {
        "type": "separator",
        "color": "#ab8554",
        "margin": "4px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "spacing": "sm",
        "contents": [
          {
            "type": "text",
            "text": "現在只要：",
            "wrap": true,
            "adjustMode": "shrink-to-fit",
            "weight": "bold",
            "color": "#ab8554"
          },
          {
            "type": "text",
            "text": "① 按讚追蹤 蓼蓼麵包小賣所 lùlù bakery",
            "wrap": true,
            "adjustMode": "shrink-to-fit",
            "weight": "bold",
            "color": "#ab8554"
          },
          {
            "type": "text",
            "text": "② 公開分享此篇貼文",
            "wrap": true,
            "adjustMode": "shrink-to-fit",
            "weight": "bold",
            "color": "#ab8554"
          },
          {
            "type": "text",
            "text": "③ 在貼文底下tag 兩位朋友，並留言「一起來吃蓼蓼麵包8～」",
            "wrap": true,
            "adjustMode": "shrink-to-fit",
            "weight": "bold",
            "color": "#ab8554"
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": "IG",
              "uri": "https://ppt.cc/f2OTex"
            },
            "color": "#d5ccba"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": "FB",
              "uri": "https://ppt.cc/ftqBbx"
            },
            "color": "#d5ccba"
          }
        ],
        "flex": 0,
        "spacing": "sm"
      },
      {
        "type": "text",
        "text": "即日起至08/13 23：59止",
        "size": "xs",
        "color": "#d5ccba",
        "align": "end",
        "weight": "bold"
      }
    ],
    "flex": 0,
    "spacing": "lg"
  }
}
        }
      ])
	  
      if (result) {
        //alert(`[${result.status}] Message sent!`)
		alert(`分享完成!`)
      } else {
        const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split('.');

        if (minorVer === undefined) {
          alert('ShareTargetPicker was canceled in external browser')
          return
        }

        if (parseInt(majorVer) >= 10 && parseInt(minorVer) >= 10 && parseInt(patchVer) > 0) {
          alert('ShareTargetPicker was canceled in LINE app')
        }
      }
	  
	
    }
    function logOut() {
      liff.logout()
      window.location.reload()
    }
    async function main() {
   
      if (liff.isLoggedIn()) {
        document.getElementById("btnShare").style.display = "block";
		 document.getElementById("btnLogin").style.display = "none";
		 document.getElementById("btnLogOut").style.display = "block"
        if (!liff.isInClient()) {
          document.getElementById("btnLogOut").style.display = "block"
        }
      } else {
        document.getElementById("btnLogin").style.display = "block"
      }
    }

