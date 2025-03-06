# BambooProductsCompanyHomepage

Based on https://github.com/issaafalkattan/React-Landing-Page-Template

## Setup & Deploy

Install requirements：
```
npm install
```

Local debug：
```
npm run start
```

Production environment deployment：
```
npm run build
screen
nohup node /usr/local/bin/serve -s build &
```

nginx configuration：
```
location / {
    proxy_pass http://localhost:3000;  # 映射到本地的 3000 端口
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

Production environment backups：
```
# Aliyun
ssh root@120.27.238.27
```

## Visit

http://120.27.238.27