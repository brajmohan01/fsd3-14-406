import http from "http";
import { getAllTeams, addTeam } from "./teams.js";
import { parse as parseUrl } from "url";

const PORT = process.env.PORT || 5002;

const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(data === undefined ? "" : JSON.stringify(data));
};

const parseJSONBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
};

const server = http.createServer(async (req, res) => {
  const { pathname, query } = parseUrl(req.url, true);
  const { method } = req;
  console.log("pathname:", pathname);
  console.log("query:", query);
  console.log("Method:", method);

  if (pathname === "/api/v1/teams" && method === "GET") {
    const teams = getAllTeams();
    return sendJson(res, 200, { count: teams.length, data: teams });
  }

  if (pathname === "/api/v1/teams" && method === "POST") {
    const body = await parseJSONBody(req);
    const { tname, tl, members } = body;

    if (!tname || !tl || !members) {
      return sendJson(res, 400, {
        error: "Team Name, Team Leader, or Members not defined",
      });
    }

    const team = addTeam({ tname, tl, members });
    return sendJson(res, 201, {
      message: "Team registered successfully",
      data: team,
    });
  }

  res.statusCode = 404;
  res.end();
});

server.listen(PORT, () => {
  console.log("SIH Server Is Running at", PORT);
});
