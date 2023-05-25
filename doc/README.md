```shell
sudo docker build -t yiluxiangbei/chatgpt-shortcut:v1 -f docker/Dockerfile .
sudo docker build --no-cache -t yiluxiangbei/chatgpt-shortcut:v1 -f docker/Dockerfile .
sudo docker run --rm -p 8080:80 --name chatgpt-shortcut yiluxiangbei/chatgpt-shortcut:v1

sudo docker run -d -p 8080:80 --name chatgpt-shortcut yiluxiangbei/chatgpt-shortcut:v1

docker rmi `docker images|grep none |  awk '{print $3}'`
```