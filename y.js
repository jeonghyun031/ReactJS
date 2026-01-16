let i, j, row, n = 11;
for (i = 0; i <= n; i++) {
    row = "";
    for (j = 0; j <= n; j++) {
        if (i == 0 || i == n - 1 || j == 0 || j == n - 1 || j == Math.floor(n / 2)
            || i == Math.floor(n / 2) || i == j || i + j == n - 1
            || i + j == Math.floor(n / 2) || i - j == Math.floor(n / 2)
            || i + j == (n - 1) + Math.floor(n / 2)
            || j - i == Math.floor(n / 2)
        ) {
            row += "*";
        }
        else {
            row += " ";
        }
    }
    console.log(row);
}

//how to code jwt
app.get("/profil", (req, res) => {
    const authHeader = req.hearders.authorization;
    const token = authHeader.split(" ")[1];

    if (!token)
        //valid token
        return res.status(401).json({ error: "No token" });
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ message: `hello, ${user.userid}` });
    } catch {
        //invalid token
        res.status(403).json({ error: "Invalid token" });
    }
});
//.env file insert token. use HTTPS