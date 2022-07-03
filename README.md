# Celebrations-backend

## A Full stack web app that can be used by users with similar interests or intensions to join in interact with others, where they can share memorable events happening in their
life along with editing and or even deleting them if they later want. An user can even like other members posts, along with it's own having a firm grasp of what's going on
in the circle

![image](https://user-images.githubusercontent.com/73072690/177022931-a2914aca-ac2f-44a2-a691-cd559c03b7dc.png)

## Functionalities

### 1. An user can create add in an event of whatever it's upto or an interesting event that's happened in it's life with the help of a form asking for the required data from the user for the creation of the post .
![image](https://user-images.githubusercontent.com/73072690/177023057-4ed122f9-c376-4a50-9de8-b45fd7d9f002.png)
![image](https://user-images.githubusercontent.com/73072690/177023062-e466d783-8a5d-4f97-a6e2-a9f50a261510.png)

The post is created without the reloading of the page for the user to see 

### 2. An user can later edit this post if it wants with the help of the edit button listed at the top right of each post which refills the form back when clicked

![image](https://user-images.githubusercontent.com/73072690/177023071-a2ccc658-0523-4841-9043-58e1dddf853d.png)
![image](https://user-images.githubusercontent.com/73072690/177023083-ef2bc168-c73f-41f1-b58a-4bed119a5ebb.png)

### 3. An user can like an other person's post 
![image](https://user-images.githubusercontent.com/73072690/177023102-7dd6b17c-4243-46e2-a187-b3385dcbc939.png)

### 4. An user can delete it's post if wanted later
![image](https://user-images.githubusercontent.com/73072690/177023121-951880d0-a856-47db-878f-cba0cc5f5e94.png)
![image](https://user-images.githubusercontent.com/73072690/177023130-c540b79f-dbf2-4ce6-b896-ff1f39cad91c.png)


## Authentication
### The authentication in the application is possible in two ways, via Google api's , and via the use of jsom web tokens, bcrypt hashing. An user can acess any method it wants
### Both the methods store the user via the help of a google api token, or a jwt token in the local storage for an hour
![image](https://user-images.githubusercontent.com/73072690/177023163-45a1d934-4305-4ea8-8e84-28d3a5202235.png)
![image](https://user-images.githubusercontent.com/73072690/177023175-f15eefdd-48e2-4322-a01e-91c82571b5d6.png)
![image](https://user-images.githubusercontent.com/73072690/177023187-8e4927d1-d1cc-49a1-9275-cf204f1c1fa9.png)


## Key Features

### 1. An user can only edit, delete a post that has been created by the user itself, or else the options won't be provided
![image](https://user-images.githubusercontent.com/73072690/177024843-3c812ce9-e743-4799-9956-1db3a0a90dc4.png)
![image](https://user-images.githubusercontent.com/73072690/177024850-17de2247-4f6c-49b2-80c4-aedb5e523e5c.png)

### 2. An user can like a post only once, if it tries to like it again the previous like too would disappear
![image](https://user-images.githubusercontent.com/73072690/177024883-a550e70f-3a5d-4640-bce0-dc5cdab1547a.png)
![image](https://user-images.githubusercontent.com/73072690/177024889-524df841-519f-412b-b222-ba6e502fa65b.png)

### 3. No actions can be performed without logging in/ signing in the application, and at the end of an hour the user is automatically logged out and no more actions can be performed
![image](https://user-images.githubusercontent.com/73072690/177022931-a2914aca-ac2f-44a2-a691-cd559c03b7dc.png)
