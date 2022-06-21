export const colorMap = {
  p: "palegreen",
  y: "yellow",
  r: "royalblue",
  t: "tomato",
};

export const playerOrder = ["palegreen", "yellow", "royalblue", "tomato"];

export const markColorIndexes = {
  leftOrTop: {
    openIndex: "12",
    markIndex: ["11", "12", "21", "31", "41", "51"],
  },
  rightOrBottom: {
    openIndex: "40",
    markIndex: ["01", "11", "21", "31", "40", "41"],
  },
};

export const markStarIndexes = {
  leftOrTop: { markIndex: ["12", "20"] },
  rightOrBottom: { markIndex: ["32", "40"] },
};

export const starIndexes = [
  "p32",
  "p40",
  "y20",
  "y12",
  "r20",
  "r12",
  "t32",
  "t40",
];

export const startMoves = {
  tomato: "t40",
  palegreen: "p40",
  yellow: "y12",
  royalblue: "r12",
};

export const specialMoves = {
  r51: ["r41", "r31", "r21", "r11", "r01"],
  p51: ["p41", "p31", "p21", "p11", "p01"],
  y01: ["y11", "y21", "y31", "y41", "y51"],
  r01: ["r11", "r21", "r31", "r41", "r51"],
};

export const moves = {
  palegreen: [
    "p40",
    "p30",
    "p20",
    "p10",
    "p00",
    "y50",
    "y40",
    "y30",
    "y20",
    "y10",
    "y00",
    "y01",
    "y02",
    "y12",
    "y22",
    "y32",
    "y42",
    "y52",
    "r50",
    "r40",
    "r30",
    "r20",
    "r10",
    "r00",
    "r01",
    "r02",
    "r12",
    "r22",
    "r32",
    "r42",
    "r52",
    "t02",
    "t12",
    "t22",
    "t32",
    "t42",
    "t52",
    "t51",
    "t50",
    "t40",
    "t30",
    "t20",
    "t10",
    "t00",
    "p02",
    "p12",
    "p22",
    "p32",
    "p42",
    "p52",
    "p51",
    "p41",
    "p31",
    "p21",
    "p11",
    "p01",
    "p-won",
  ],
  yellow: [
    "y12",
    "y22",
    "y32",
    "y42",
    "y52",
    "r50",
    "r40",
    "r30",
    "r20",
    "r10",
    "r00",
    "r01",
    "r02",
    "r12",
    "r22",
    "r32",
    "r42",
    "r52",
    "t02",
    "t12",
    "t22",
    "t32",
    "t42",
    "t52",
    "t51",
    "t50",
    "t40",
    "t30",
    "t20",
    "t10",
    "t00",
    "p02",
    "p12",
    "p22",
    "p32",
    "p42",
    "p52",
    "p51",
    "p50",
    "p40",
    "p30",
    "p20",
    "p10",
    "p00",
    "y50",
    "y40",
    "y30",
    "y20",
    "y10",
    "y00",
    "y01",
    "y11",
    "y21",
    "y31",
    "y41",
    "y51",
    "y-won",
  ],
  royalblue: [
    "r12",
    "r22",
    "r32",
    "r42",
    "r52",
    "t02",
    "t12",
    "t22",
    "t32",
    "t42",
    "t52",
    "t51",
    "t50",
    "t40",
    "t30",
    "t20",
    "t10",
    "t00",
    "p02",
    "p12",
    "p22",
    "p32",
    "p42",
    "p52",
    "p51",
    "p50",
    "p40",
    "p30",
    "p20",
    "p10",
    "p00",
    "y50",
    "y40",
    "y30",
    "y20",
    "y10",
    "y00",
    "y01",
    "y02",
    "y12",
    "y22",
    "y32",
    "y42",
    "y52",
    "r50",
    "r40",
    "r30",
    "r20",
    "r10",
    "r00",
    "r01",
    "r11",
    "r21",
    "r31",
    "r41",
    "r51",
    "r-won",
  ],
  tomato: [
    "t40",
    "t30",
    "t20",
    "t10",
    "t00",
    "p02",
    "p12",
    "p22",
    "p32",
    "p42",
    "p52",
    "p51",
    "p50",
    "p40",
    "p30",
    "p20",
    "p10",
    "p00",
    "y50",
    "y40",
    "y30",
    "y20",
    "y10",
    "y00",
    "y01",
    "y02",
    "y12",
    "y22",
    "y32",
    "y42",
    "y52",
    "r50",
    "r40",
    "r30",
    "r20",
    "r10",
    "r00",
    "r01",
    "r02",
    "r12",
    "r22",
    "r32",
    "r42",
    "r52",
    "t02",
    "t12",
    "t22",
    "t32",
    "t42",
    "t52",
    "t51",
    "t41",
    "t31",
    "t21",
    "t11",
    "t01",
    "t-won",
  ],
};
