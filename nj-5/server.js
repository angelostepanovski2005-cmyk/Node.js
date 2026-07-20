const http = require("http");
const url = require("url");
const { calculate } = require("./calculator");

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = decodeURI(parsedUrl.pathname); 

  if (
    pathname.startsWith("/home/") &&
    pathname !== "/home/title" &&
    pathname !== "/home/header"
  ) {
    const rawData = pathname.replace("/home/", "");
    const formattedData = capitalizeWords(rawData);

    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end(formattedData);
  }

  switch (pathname) {
    case "/home/title":
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      return res.end("<h1>Ova e naslovot na rutata!</h1>");

    case "/home/header":
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Ova e header!");

    case "/kalkulator":
      const { op, n1, n2 } = parsedUrl.query;
      if (!op || !n1) {
        res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
        return res.end("Nedostaju parametri op (operacija) i n1 (prvi broj).");
      }

      const rezultat = calculate(op, n1, n2);
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end(`Rezultat od ${op}: ${rezultat}`);

    default:
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("404: Stranica ne postoji.");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server je pokrenut na http://localhost:${PORT}`);
});
