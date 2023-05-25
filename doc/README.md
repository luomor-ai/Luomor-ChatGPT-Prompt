```shell
sudo docker build -t yiluxiangbei/luomor-chatgpt-prompt:v1 -f docker/Dockerfile .
sudo docker build --no-cache -t yiluxiangbei/luomor-chatgpt-prompt:v1 -f docker/Dockerfile .
sudo docker run --rm -p 8080:80 --name luomor-chatgpt-prompt yiluxiangbei/luomor-chatgpt-prompt:v1

sudo docker run -d -p 8080:80 --name luomor-chatgpt-prompt yiluxiangbei/luomor-chatgpt-prompt:v1

sudo docker stop luomor-chatgpt-prompt
sudo docker start luomor-chatgpt-prompt

sudo docker push yiluxiangbei/luomor-chatgpt-prompt:v1

sudo docker ps|grep luomor-chatgpt-prompt

docker rmi `docker images|grep none |  awk '{print $3}'`
```