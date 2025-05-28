# step-by-step instructions

1. Deployed MongoDB in the Kubernetes cluster using a Deployment and a Service. Ensure the Service used a ClusterIP and gave it the name mongodb-service for internal access.
<img width="817" alt="image" src="https://github.com/user-attachments/assets/ece7161d-9777-4552-8ae8-686d34bf3214" />
<img width="845" alt="image" src="https://github.com/user-attachments/assets/f821f353-0a1f-4d46-9e60-4d78dd56caf8" />

2. Create a Persistent Volume (PV) and a Persistent Volume Claim (PVC) so that MongoDB’s data would persist across pod restarts or failures.
<img width="854" alt="Create a Persistent Volume (PV) and a Persistent Volume Claim (PVC)" src="https://github.com/user-attachments/assets/3407d46c-c5d6-4496-a9a1-78875b3d8c60" />

3. Store sensitive MongoDB credentials (like username and password) securely in Kubernetes Secrets. These were later used in the app’s deployment.
<img width="850" alt="Store sensitive MongoDB credentials" src="https://github.com/user-attachments/assets/e435f3b8-2f82-43b4-80ce-a2658522d7d2" />

4. Modified the Node.js app's Kubernetes Deployment to include environment variables for connecting to MongoDB. These included MONGO_URL and DB_NAME, which were used by the app at runtime.
<img width="974" alt="edit app to handle CRUD operations and integrate with MongoDB" src="https://github.com/user-attachments/assets/56b538db-9bf9-4de0-a367-be2c8aed7981" />

5. Check Docker Desktop for the status of the container
<img width="1118" alt="Docker Containers" src="https://github.com/user-attachments/assets/75950187-36d6-461b-8f02-3263bcb1e0e6" />

6. Apply kubectl files / install MongoDB module
<img width="617" alt="install mongoDB" src="https://github.com/user-attachments/assets/18147f7b-2fb9-414f-8e2e-0fa4fc268228" />
<img width="682" alt="apply files" src="https://github.com/user-attachments/assets/beea09a8-c787-405a-a6a6-2913fe7892d7" />

7. Check pods and app logs to see issues
<img width="673" alt="check status or check logs" src="https://github.com/user-attachments/assets/5ebaea86-3fce-4518-ac81-5498e64db430" />

8. checked your app’s logs using kubectl logs and confirmed the app was successfully connecting to MongoDB.
<img width="973" alt="Connected to MongoDB" src="https://github.com/user-attachments/assets/30ac1cb7-e232-423d-9702-ccfea70c86fb" />

9. Build and Push the image
<img width="932" alt="build and push" src="https://github.com/user-attachments/assets/bc928e2e-d86f-4b2b-993a-1d747e557159" />

10. Restart and Portforward
<img width="959" alt="Restart and port forward to run" src="https://github.com/user-attachments/assets/fb89276d-e013-4887-9317-aac9b065dd13" />

11. Using curl, test each route:

Create: Sent a POST request to /create to add a user.

Read: Sent a GET request to /users to fetch users.

Update: Sent a PUT request to /update/:id to modify a user.

Delete: Sent a DELETE request to /delete/:id to remove a user.

<img width="965" alt="John with CRUD ops" src="https://github.com/user-attachments/assets/3dca6661-b2be-48af-b0e5-b8c18567fc03" />

12. Prepare project for backups using cronjob. Create the backup.yaml and backup-pv-yaml files, apply them
<img width="860" alt="image" src="https://github.com/user-attachments/assets/39dc4942-3245-4608-84bd-e575df672da8" />
<img width="860" alt="image" src="https://github.com/user-attachments/assets/90b0288a-a7b1-451f-84e3-438a91b94d25" />

13. Insert data for backup
<img width="1065" alt="image" src="https://github.com/user-attachments/assets/8d47f50b-f1b1-4551-9ab7-bb5f145f400d" />

14. Create a new debug-backup-pod.yaml
<img width="1229" alt="image" src="https://github.com/user-attachments/assets/fe8d5621-817d-41cb-8102-c33887ed9dda" />

15. check if the data was backed up
<img width="713" alt="image" src="https://github.com/user-attachments/assets/b793cdf9-f2eb-458a-afcc-674210986710" />

16. Install metrics server for monitoring
<img width="1052" alt="image" src="https://github.com/user-attachments/assets/876a4600-a49c-42ae-b714-28650de6b8ae" />

17. Check pod status and query the metrics
<img width="779" alt="image" src="https://github.com/user-attachments/assets/67d2d374-4d01-4c7a-9953-7b311baa09ce" />
<img width="595" alt="image" src="https://github.com/user-attachments/assets/85cb6fe4-fc8e-4feb-82d4-abadec6d6292" />

18. Check Docker-Desktop for metrics and monitoring
<img width="1371" alt="image" src="https://github.com/user-attachments/assets/89e09cb6-0aac-4c6a-b45a-60bd38543bff" />
