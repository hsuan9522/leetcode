const fs = require("fs");
const gitlog = require("gitlog").default;
function detail() {


    const options = {
        repo: __dirname,
        number: 200,
        fields: ["subject", "committerDate"],
        execOptions: { maxBuffer: 1000 * 1024 },
    };

    let folderNames = {};
    fs.readdir("./leetcode", (err, files) => {
        files.forEach((el) => {
            folderNames[parseInt(el.replace(/. .*/g, ""))] = el
        });
    });

    gitlog(options, function (error, commits) {
        const tmp = commits.filter(el => {
            const isNumHead = el.subject.match(/^[0-9]/g)?.length > 0 ? true : false
            return isNumHead
        }).map(el => {
            const { subject, committerDate } = el;
            const d = new Date(committerDate)
            const dateFormat = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
            const match = subject.match(/[0-9]{3,4}/g)
            return { subject, date: dateFormat, problems: match }
        })
        let string = '### Detail\n```markdown\n'
        tmp.forEach((el, i) => {
            const d = new Date(tmp[i].date)
            const date = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
            if (i === 0) {
                pre = date
            }
            if (i !== 0 && date === pre) {
                el.problems.forEach(e => {
                    string += `* ${folderNames[parseInt(e)]}\n`
                })
            } else {
                string += `\n# ${date}\n`
                el.problems.forEach(e => {
                    string += `* ${folderNames[parseInt(e)]}\n`
                })
                pre = date
            }
        })
        string += '\n```\n'
        fs.writeFile(
            "TIMELINE.md",
            string,
            (err) => { }
        );
    });
}
module.exports = detail;