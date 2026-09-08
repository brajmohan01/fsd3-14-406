import http from 'http';
// import * as teams from './teams.js';
import { getAllTeams, addTeam } from './teams.js';
import {parse as parseUrl} from 'url';

const PORT = 5001;
const sendJson = (res , statusCode, data) => {
    res.writeHead(statusCode, {'Content-Type': 'application/json'});
    res.end(data === "undefined" ? "" : JSON.stringify(data));
}

const parseJSONbody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(error);
            }
        });
        
    });
};

const server = http.createServer(async (req, res) => {
    const {pathname, query} = parseUrl(req.url, true);
    console.log('pathname:', pathname, 'query:', query,'Method:', req.method);

    if(pathname === 'api/v1/teams' && req.method === 'GET'){
        let teams = getAllTeams();
        return sendJson(res, 200, teams);

    }else if(pathname === 'api/v1/teams' && req.method === 'POST'){
        const newTeam = await parseJSONbody(req);
        const team = addTeam(newTeam);
        return sendJson(res, 201, team);


    }else{
        res.statusCode = 404;
    }
    res.end();
});

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});