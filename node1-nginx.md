## /etc/yum.repos.d/nginx.repo 파일 생성
```
[nginx] 
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```

## nginx 설치
```
sudo yum install -y nginx
```

## 방화벽 추가
```
systemctl enable firewalld
systemctl start firewalld
firewall-cmd --permanent --zone=public --add-port=8080/tcp
firewall-cmd --reload
firewall-cmd --list-ports
```

## PORT 변경
```
vi /etc/nginx/conf.d/default.conf (포트 변경)
systemctl start nginx
systemctl enable nginx
```
