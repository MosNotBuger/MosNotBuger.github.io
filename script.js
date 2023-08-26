  async function sendShare() {
   await liff.init({ liffId: "1660688616-gp3JJ6rR" });
console.log(liff.isApiAvailable('shareTargetPicker'));
      const result = await liff.shareTargetPicker([
                {
          "type": "flex",
          "altText": "蓼蓼牌盲選麵包箱放送活動",
          "contents":{
  "type": "bubble",
  "size": "giga",
  "hero": {
    "type": "image",
    "url": "https://i.imgur.com/8L9iHCv.jpg",
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
            "text": "冷凍店取運費0元！名額有限敬請把握 ✌︎ ",
            "wrap": true,
            "adjustMode": "shrink-to-fit",
            "weight": "bold",
            "color": "#ab8554",
            "size": "lg"
          },
          {
            "type": "text",
            "text": "一人製作、每週出貨！",
            "wrap": true,
            "adjustMode": "shrink-to-fit",
            "weight": "bold",
            "color": "#ab8554"
          },
          {
            "type": "text",
            "text": "即日起～2023/09/27 23:59",
            "wrap": true,
            "adjustMode": "shrink-to-fit",
            "weight": "bold",
            "color": "#ab8554",
            "align": "center"
          }
        ]
      },
      {
        "type": "separator",
        "color": "#ab8554",
        "margin": "4px"
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
              "label": "訂閱 IG",
              "uri": "https://www.instagram.com/_lu_lu_bakery/"
            },
            "color": "#d5ccba"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": "訂閱 FB",
              "uri": "https://www.facebook.com/lulubakeryyy"
            },
            "color": "#d5ccba"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": "分享",
              "uri": "https://liff.line.me/1660688616-gp3JJ6rR"
            },
            "color": "#d5ccba"
          }
        ],
        "flex": 0,
        "spacing": "sm"
      },
      {
        "type": "separator",
        "color": "#ab8554",
        "margin": "2px"
      },
      {
        "type": "button",
        "style": "primary",
        "action": {
          "type": "uri",
          "label": "立刻下單",
          "uri": "https://myship.7-11.com.tw/general/detail/GM2308222769268"
        },
        "color": "#ab8554"
      },
      {
        "type": "text",
        "text": "#急單請先pass哦不好14(´༎ຶོρ༎ຶོ`)",
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
	      liff.closeWindow();
      } else {
        const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split('.');

        if (minorVer === undefined) {
          alert('ShareTargetPicker was canceled in external browser')
		 liff.closeWindow();
          return
        }

        if (parseInt(majorVer) >= 10 && parseInt(minorVer) >= 10 && parseInt(patchVer) > 0) {
          alert('ShareTargetPicker was canceled in LINE app')
		 liff.closeWindow();
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

