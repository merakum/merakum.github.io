app.use((req, res) => {
        req.query.code = 404;
        req.query.message = `Page not found.`;
        res.status(404).render("error.ejs", {
            bot: global.Client,
            path: req.path,
            config: global.config,
            user: req.isAuthenticated() ? req.user : null,
            req: req,
            roles:global.config.server.roles,
            channels: global.config.server.channels
        })
    });
  };
