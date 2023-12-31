--- Docker
- Redis / docker run -it redis
- docker run hello-world / docker run <container-name>
docker run busybox echo hi there
docker run busybox ls

BusyBox is a lightweight and versatile set of Unix utilities bundled into a single executable. It is designed to provide a variety of common command-line utilities in a small and efficient package.

BusyBox includes implementations of many standard Unix utilities, such as sh (shell), ls (list directory contents), cp (copy files), mv (move/rename files), rm (remove files), and many more. The utilities provided by BusyBox are often used in embedded systems, environments with limited resources, and in scenarios where a minimalistic approach is desired.

- docker ps         |- list of all containers running
- docker ps --all   |
- docker run = docker create + docker start ( docker create hello world -> [id]; docker start -a [id])

- docker system prune -> removing all
- docker logs [id]

- docker stop <container id> --- stops in 10 seconds
- docker kill <container id> --- stops immediately 

- docker run -it busybox sh

--- Redis
- docker run redis
- docker exec -it <container id> <command>(redis-cli) - exec allow us execute additional command 
- docker exec -it <command>(redis-cli)
- docker exec -it [id] sh - sh is command shell
-it meaning -i -t (in, out) - allow us to provide input to the container

--- Docker Image
Dockerfile -> Docker Client(CLI) -> Docker server -> Usable Image!


--- Docker build
Dockerfile ->
# Use an existing docker image as a base 
FROM alpine
# Download and install a dependency
RUN apk add --update redis
RUN apk add --update gcc
# Tell the image what to do when it starts
# as a container
CMD ["redis-server"]
- docker build .
- docker run [id]
- docker run <docker-id>/<project-name>:latest .

- docker commit -c 'CMD ["redis-server"]' CONTAINERID
or
- docker commit -c "CMD 'redis-server'" CONTAINERID

Docker run
- docker run -it -p 8080:8080 ceko/simpleweb


### k8s
- kubectl apply -f posts-depl.yaml || kubectl apply -f . (for all)
- kubectl get pods
- kubectl delete pod posts
- kubectl logs <pod-id>
- kubectl get deployments

---- docker push DOCKERHUB_USER/posts
---- docker build -t DOCKERHUB_USER/posts .

- kubectl rollout restart deployment posts-depl
- kubectl get services
- kubectl describe service posts-srv
- kubectl rollout restart deployment post-depl


### Composition
- Build an Image                                -> docker build  -t dimitrov93/event-bus .
- Push the Image to Docker Hub                  -> docker push dimitrov93/event-bus
- Create deployment                             -> kubectl apply -f event-bus-depl.yaml
- Create a Cluster IP service
