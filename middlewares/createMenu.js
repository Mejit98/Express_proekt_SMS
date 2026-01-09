const Scooby = require("../models/scooby-du").Scooby;
const ICONS = {
  velma: "👩🏽",
  "scooby-dy": "🐶",
  sheki: "🧑🏼",
  dafna: "👩🏻‍🦰",
  fred: "👱🏻‍♂️"
};

module.exports = async function createMenu(req, res, next) {
  res.locals.siteTitle = "Корпорация Тайна";

  try {
    const menu = await Scooby.find({}, { _id: 0, title: 1, nick: 1 });

    if (Array.isArray(menu) && menu.length > 0) {
      res.locals.nav = menu.map(character => ({
        name: character.title,
        url: `/scoobies/${character.nick}`,
        icon: ICONS[character.nick] || "👻"
      }));
    } else {
      res.locals.nav = [];
    }

  } catch (err) {
    console.log("Ошибка создания меню:", err.message);
    res.locals.nav = [
      { name: "Велма", url: "/scoobies/velma", icon: "👩🏽" },
      { name: "Скуби-Ду", url: "/scoobies/scooby-dy", icon: "🐶" },
      { name: "Шегги", url: "/scoobies/sheki", icon: "🧑🏼" },
      { name: "Дафна", url: "/scoobies/dafna", icon: "👩🏻‍🦰" },
      { name: "Фред", url: "/scoobies/fred", icon: "👱🏻‍♂️" }
    ];
  }
  res.locals.nav = res.locals.nav.map(item => ({
    ...item,
    active: req.path === item.url
  }));

  next();
};
