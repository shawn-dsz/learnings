#configure babel with react

###web.config
```
module: {
    loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
    ]
}
```

### .babelrc
```
{
    "presets": ["es2015", "react"]
}
```


### package.json

```
"devDependencies": {
    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13"
}
```



###webpack sourcemap

```devtool: "eval-source-map"```
