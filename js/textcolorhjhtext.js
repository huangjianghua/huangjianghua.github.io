// 手机端添加彩色滚动变换字体
    var binft = function (r) {
      function t() {
        return b[Math.floor(Math.random() * b.length)]
      }  
      function e() {
        return String.fromCharCode(124)
      }
      function n(r) {
        for (var n = document.createDocumentFragment(), i = 4; r > i; i++) {
          var l = document.createElement("span");
          l.textContent = e(), l.style.color = t(), n.appendChild(l)
        }
        return n
      }
      function i() {
        var t = o[c.skillI];
        c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
      }
      var l = "",
      o = ["尽管走下去，不必逗留着。去采鲜花来保存。因为在这一路上，花自然会开放。--泰戈尔","此生何用声声叹，道不尽流年，看流沙聚散，回首天涯路远；英雄何用声声叹，断碑落残垣，君不见青山，豪杰冢化尘烟。","我们就像一颗烟火里的尘埃，在茫茫欲流之中不断的驶过寂寞与繁华，或许一转眼，你就什么都会失去，就像三毛说的一样:\"如果有来生， 要做一棵树，站成永恒， 没有悲欢的姿势。 一半在土里安详， 一半在风里飞扬， 一半洒落阴凉， 一半沐浴阳光， 非常沉默非常骄傲， 从不依靠，从不寻找。\"---三毛"].map(function (r) {
      return r + ""
      }),
      a = 2,
      g = 1,
      s = 5,
      d = 60,
      b = ["rgb(110,64,170)","rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
      c = {
        text: "",
        prefixP: -s,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: a,
        step: g
      };
      i()
      };
      binft(document.getElementById('dream_text'));