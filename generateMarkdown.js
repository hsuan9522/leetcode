let request = require("request");
let fs = require("fs");

let folderNames = {};
let doneList;
fs.readdir("./leetcode", (err, files) => {
    doneList = files.map((el) => {
        folderNames[parseInt(el.replace(/. .*/g, ""))] = el.replace(/ /g, "%20");
        return parseInt(el.replace(/. .*/g, ""))
    });
});

function callRequest(callback) {
    request(
        {
            url: "https://leetcode.com/api/problems/all/",
            method: "GET",
            timeout: 10000,
        },
        function (err, res, body) {
            const json = JSON.parse(body).stat_status_pairs;
            const problems = [...json]
                .sort(
                    (a, b) => parseInt(a.stat.question_id) - parseInt(b.stat.question_id)
                )
                .map((el) => {
                    return {
                        title: el.stat.question__title,
                        id: parseInt(el.stat.question_id),
                        paid: el.paid_only,
                        level: el.difficulty.level,
                    };
                });
            callback(null, problems);
        }
    );
}

callRequest(async (err, body) => {
    if (err) {
        console.log(err);
    } else {
        const allLength = body.length;
        const doneLength = doneList.length;
        await fs.writeFile(
            "README.md",
            "## 介紹\n記錄自己的leetcode解題之路。使用語言為javascript，搭配jest使用。\n### LeetCode Solution Table\n---\n`" +
            `${doneLength}/${allLength}` +
            "`\n" + `|  ID  |  Title  |  Difficulty  |  Done  |\n| ----  | ----  | :----:  | :----:  |\n`,
            (err) => { }
        );
        makeData(body);
    }
});

function makeData(data) {
    const sql = [175, 176, 185]
    const levelMap = {
        1: "Easy",
        2: "Medium",
        3: "Hard",
    };
    let allString = "";
    data.forEach((el) => {
        const extension = sql.includes(el.id) ? 'sql' : 'js'
        const isDone = doneList.includes(el.id) ? `[✔️](https://github.com/hsuan9522/leetcode/blob/master/leetcode/${folderNames[el.id]}/index.${extension})` : "-";
        const fileName = `[${el.title} ${el.paid ? "🔒" : ""}](https://leetcode.com/problems/${el.title.toLowerCase().replace(/ /g, "-")}/description/)`;
        let string = `|  ${el.id}  |  ${fileName}  |  ${levelMap[el.level]}  | ${isDone} |\n`;

        allString += string;
    });
    fs.appendFile("README.md", allString, (err) => { });
}
