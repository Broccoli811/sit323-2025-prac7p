# step-by-step instructions

1. Deployed MongoDB in the Kubernetes cluster using a Deployment and a Service. Ensure the Service used a ClusterIP and gave it the name mongodb-service for internal access.
<img width="817" alt="image" src="https://github.com/user-attachments/assets/ece7161d-9777-4552-8ae8-686d34bf3214" />
<img width="845" alt="image" src="https://github.com/user-attachments/assets/f821f353-0a1f-4d46-9e60-4d78dd56caf8" />

3. Create a Persistent Volume (PV) and a Persistent Volume Claim (PVC) so that MongoDB’s data would persist across pod restarts or failures.
<img width="854" alt="Create a Persistent Volume (PV) and a Persistent Volume Claim (PVC)" src="https://github.com/user-attachments/assets/3407d46c-c5d6-4496-a9a1-78875b3d8c60" />

5. Store sensitive MongoDB credentials (like username and password) securely in Kubernetes Secrets. These were later used in the app’s deployment.
<img width="850" alt="Store sensitive MongoDB credentials" src="https://github.com/user-attachments/assets/e435f3b8-2f82-43b4-80ce-a2658522d7d2" />

7. Modified the Node.js app's Kubernetes Deployment to include environment variables for connecting to MongoDB. These included MONGO_URL and DB_NAME, which were used by the app at runtime.
<img width="974" alt="edit app to handle CRUD operations and integrate with MongoDB" src="https://github.com/user-attachments/assets/56b538db-9bf9-4de0-a367-be2c8aed7981" />

3. Check Docker Desktop for the status of the container
<img width="1118" alt="Docker Containers" src="https://github.com/user-attachments/assets/75950187-36d6-461b-8f02-3263bcb1e0e6" />

4. Apply kubectl files / install MongoDB module
<img width="617" alt="install mongoDB" src="https://github.com/user-attachments/assets/18147f7b-2fb9-414f-8e2e-0fa4fc268228" />
<img width="682" alt="apply files" src="https://github.com/user-attachments/assets/beea09a8-c787-405a-a6a6-2913fe7892d7" />

5. Check pods and app logs to see issues
<img width="673" alt="check status or check logs" src="https://github.com/user-attachments/assets/5ebaea86-3fce-4518-ac81-5498e64db430" />

6. checked your app’s logs using kubectl logs and confirmed the app was successfully connecting to MongoDB.
<img width="973" alt="Connected to MongoDB" src="https://github.com/user-attachments/assets/30ac1cb7-e232-423d-9702-ccfea70c86fb" />

7. Build and Push the image
<img width="932" alt="build and push" src="https://github.com/user-attachments/assets/bc928e2e-d86f-4b2b-993a-1d747e557159" />

8. Restart and Portforward
<img width="959" alt="Restart and port forward to run" src="https://github.com/user-attachments/assets/fb89276d-e013-4887-9317-aac9b065dd13" />

9. Using curl, test each route:

Create: Sent a POST request to /create to add a user.

Read: Sent a GET request to /users to fetch users.

Update: Sent a PUT request to /update/:id to modify a user.

Delete: Sent a DELETE request to /delete/:id to remove a user.

<img width="965" alt="John with CRUD ops" src="https://github.com/user-attachments/assets/3dca6661-b2be-48af-b0e5-b8c18567fc03" />
