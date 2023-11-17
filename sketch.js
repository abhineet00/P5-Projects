const s1 = (sketch) => {
  sketch.setup = function () {
    sketch.createCanvas(605, 605);
    sketch.strokeWeight(10);
  };

  sketch.draw = function () {
    sketch.background(220);

    sketch.line(5, 0, 5, 600);
    sketch.line(305, 0, 305, 600);
    sketch.line(600, 0, 600, 600);
    sketch.line(0, 5, 600, 5);
    sketch.line(0, 600, 600, 600);
    sketch.line(0, 305, 600, 305);
    var width = 605;
    var height = 605;
    let a = (b = 5);
    for (var i = 0; i < 20; i++) {
      sketch.line(a, 0, b, 300);
      a = a + 15;
      b = b + 15;
    }
    let c = (d = 20);
    for (var j = 0; j < 19; j++) {
      sketch.line(305, c, 600, d);
      c = c + 15;
      d = d + 15;
    }
    let y = width - 10;
    let z = width / 2 + 10;
    let g = width / 2 + 5;
    let h = height;

    for (var x1 = 0; x1 < 13; x1++) {
      sketch.line(g, y, z, h);
      y = y - 22;
      z = z + 22;
    }
    for (var x2 = 0; x2 < 14; x2++) {
      sketch.line(g, y, z, h);
      g = g + 22;
      h = h - 22;
    }
    for (var x3 = 0; x3 < 13; x3++) {
      sketch.line(g, y, z, h);
      y = y - 22;
      z = z + 22;
    }

    let q = sketch.width / 2 + 5;
    let p = -5;
    let r = 0;
    let v = width / 2 + 5;
    for (var x4 = 0; x4 < 14; x4++) {
      sketch.line(0, q, p, width / 2 + 5);
      q = q + 22;
      p = p + 22;
    }

    for (var x5 = 0; x5 < 13; x5++) {
      sketch.line(r, q, p, v);
      r = r + 22;
      v = v + 22;
    }
  };
};

const s2 = (sketch) => {
  sketch.setup = function () {
    sketch.createCanvas(600, 600);
  };

  sketch.draw = function () {
    sketch.background(220);
    let a = (c = e = 0);
    let b = 20;
    sketch.strokeWeight(8);
    for (var j = 0; j < 200; j++) {
      for (var i = 0; i < 100; i++) {
        sketch.line(a, c + 5, b, e - 15);
        sketch.line(a + 40, c + 5, b, e - 15);
        a = a + 40;
        b = b + 40;
      }
      c = c + 15;
      e = e + 15;
      a = 0;
      b = 20;
    }
  };
};

const s3 = (sketch) => {
  sketch.setup = function () {
    sketch.createCanvas(600, 600);
    sketch.background(2);
    sketch.stroke("");
    sketch.strokeWeight(6);
    let a = 20;
    for (let y = 0; y < 600; y += a) {
      for (let x = 0; x < 600; x += a) {
        if (sketch.random(1) < 0.5) {
          sketch.line(x, y, x + a, y + a);
        } else {
          sketch.line(x, y + a, x + a, y);
        }
      }
    }
  };
};

const s4 = (sketch) => {
  sketch.setup = function () {
    sketch.createCanvas(600, 600);
  };

  sketch.draw = function () {
    sketch.background(220);
    sketch.noStroke();
    let a = (b = c = d = 0);
    for (var j = 0; j < 200; j++) {
      for (var i = 0; i < 100; i++) {
        sketch.fill(c, d, 200);

        sketch.square(a, b, 75);
        a = a + 75;
        d = d + 40;
      }
      c = c + 40;
      b = b + 75;
      a = d = 0;
    }
  };
};

const s5 = (sketch) => {
  sketch.setup = function () {
    sketch.createCanvas(600, 600);
    sketch.background(0);
  };

  sketch.draw = function () {
    if (sketch.mouseIsPressed === true) {
      sketch.noStroke();
      sketch.fill(
        sketch.random(0, 255),
        sketch.random(0, 255),
        sketch.random(0, 255)
      );
      sketch.ellipse(sketch.mouseX, sketch.mouseY, sketch.random(5, 30));
    }
  };
};

const s6 = (sketch) => {
  var g = [];
  var c = [];
  var width = 400;
  sketch.setup = function () {
    sketch.createCanvas(400, 400);
    sketch.background(220);
    sketch.colorMode(sketch.HSB);
    sketch.noStroke();
    var a = 0;
    var w = 1;
    for (var i = 0; i <= width; i++) {
      sketch.fill(i, 100, 100);
      sketch.rect(a, 40, w, 50);
      a += w;
      g.push(sketch.color(i, 100, 100));
    }
  };

  sketch.draw = function () {};
  sketch.mouseClicked = function () {
    if (sketch.mouseY > 40 && sketch.mouseY < 90) {
      var z = sketch.int(sketch.map(sketch.mouseX, 0, width, 0, g.length));

      var sc = g[z];
      c.push(sc);

      var cl = c.length;
      var x = 0;
      var rw = width / cl;

      for (var i = 0; i < cl; i++) {
        sketch.noStroke();
        sketch.fill(c[i]);
        sketch.rect(x, 90, rw, 200);
        x += rw;
      }
    }
  };
};

let sketch1 = new p5(s1, "ss1");
let sketch2 = new p5(s2, "ss2");
let sketch3 = new p5(s3, "ss3");
let sketch4 = new p5(s4, "ss4");
let sketch5 = new p5(s5, "ss5");
let sketch6 = new p5(s6, "ss6");
