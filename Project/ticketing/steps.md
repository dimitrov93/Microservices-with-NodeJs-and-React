Steps
1) Create Dockerfile + .dockerignore
2) docker build -t dimitrov93/auth . 
3) Create folder infra => k8s => auth-depl.yaml
4) skaffold.yaml in main folder then run with "skaffold dev"
5) ingress-srv.yaml
6) Hosts file - C:\Windows\System32\drivers\etc
7) type - thisisunsafe - in chrome anywhere on the screen

8) create google cloud cluster + installing google SDK
9) configure the sdk to the project


Without Docker
10) gcloud components install kubectl -> gcloud container clusters get-credintials <cluster-name>

gcloud components install gke-gcloud-auth-plugin

With Docker
10) gcloud container clusters get-credintials <cluster-name>


kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

11) gcloud auth application-default login
11) skaffold dev

12) kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asd
kubectl describe secret jwt-secret
kubectl delete secret jwt-secret
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf


    // "start": "tsc-watch --onSuccess 'ts-node-dev src/index.ts'" 
