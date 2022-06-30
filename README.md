# WATER-BACTERIA PROJECT
### Group 1
- Alm Robert 
- Lavdim Imeri 
- Singh Vipin



## Vision
Our vision is to offer a cheap, automatic, safe, and ongoing improved method of analyzing water, using flow cytometry, producing in that way an output that can be used to draw useful conclusions about the safeness or the purity of the water and if it is possible to be used for further research, (other methods of analysis).
As a deeper goal we aim to the possibility to isolate characteristics that can indicate things like hazardless of a bacteria or clear indicators if the water is contaminated or not, to be able to analyze the water faster and more efficiently with a lower computational cost.

## Introduction
This is a project [1] that concerns the use of flow cytometry analysis to determine if a water sample is contaminated or not. Our focus was to build a reliable system that can contribute to this research, and we can claim that we managed to implement the 60% of the system.
The system still needs a lot of work, and while we are determined to continue working on it, other teams or other individuals are welcome to try to take the project from the point we left it, and we will be happy to support any effort on this project.
If you wish to work with this project. We strongly recommend you study the design section and the appendix of this report, and it is a good idea to clone our repository:
https://github.com/Exarchias/FCAproject
Or to contact us if you have any questions. We would like to see the project done and we will be happy to support your efforts, but please be kind to credit us and the other contributors to this project
## About this project
Water is one of the most essential elements for the preservation of life, the survival of humankind and the development of human civilization. In modern era, while water still can’t be considered yet as a something granted for everyone, human civilization is at ongoing effort to make access to water safer, easier, and cheaper. One way to make water safer and cheaper, improving that way the access to water, is by improving the method of analyzing the safeness of the water.
That is a goal of great importance as the access to clean water is one of the major goals of the 2030 Agenda [2] and its 17 Sustainable Development Goals, (SDGs), with SDG 16 being called “Clean Water and Sanitation” and at least other 4 of the 17 SDGs being affected by the availability and access to clean water. For example, the access to clean water is essential to the production of food, thing that calls for SDG 2, (Zero Hunger), and it is an integrated part for the goal to build sustainable cities, a matter that is addressed by SDG 11, (Sustainable Cities and Communities).
A solution to the challenge of analyzing water efficiently comes from a process that is called “Flow Cytometry” and it is a process that contains of a water sample are beamed with a laser beam in order to take measurements from the illuminance and the color that several particles emit due to their fluorescent agents. This methodology was used in the

## Design
### The basic designing idea

Behind the architecture of the system there are two different concepts. First, we have the necessity of making the front end capable of controlling the whole system according to the instructions of the user, thing that means of course that the frontend GUI needs to be intuitive.
Second concept is that the heavy calculations of the system need to be portable and independent of the web component of the system to be able to perform their functionality, even if the web component of the system fail to fulfill its purpose.

### The Previous Work
We were fortunate enough to have other group to work [4] with the same project before us, and while they seem to have a good concept, their project was poorly documented and together with a few bugs, we weren’t able to dig enough to their design.
Their basic idea is that they used a front end and a backend inside a virtual machine on a google cloud VM hosting, and they used some google authentication, (Google Oath2), system to gain access to the system. The point of failure for us was the authentication as we couldn’t figure out how to set our credentials. The truth is that we didn’t test their solution enough.
We are still willing to investigate their solution a bit more, so it is possible to expect notes, snippets or other helping materials in our repository in the near future, so please be kind to check our repository before you take any decision.
Their solution seems like a python Django instance that communicates with the front end through HTTP protocol, (an idea that we discarded as unnecessary). The problem with the backend, is that it has a strange structure that seems nonsensical to us. We assume that the whole project is their app folder, but this design is a bit strange. As we mentioned above, we still investigate their solution, but please be kind to read their documentation, (we are going to include it in our repository inside the “old project folder”).
Their Solution has its own strategy on installing dependencies using pip. The idea works but it gives problems. If you are using Conda, please feel free to use our conda virtual environment with the name “fcaprojectold”, which is stored in the file fcaprojectold.yaml.
If you are using linux. It worth the effort to try to use pip and to see if it works and how.

### Our Initial Design
Our initial idea was to have 6 different components that work together as one system. All the components are described here as “design items” and we just marked the discarded components as discarded. The main change is that we discarded the idea of using HTTP protocol between the frontend, (frontend component has its own express.js backend), and the core, through a webserver that we named “backend” or “web core”.
According to the initial design, the user could upload their files through the frontend and send them to file storage or the backend, and to send any special commands, (or the files), to the backend through http requests. A python application that we call pipeline, could then access the file storage, and perform heavy computations, (preprocessing and transforming the data), in its own time. The pipeline, discarded as well together with the web core because it was redundant.

### Our final Design
In the new design we discard the web core and the pipeline components as they are redundant. The basic idea of the new design is, that http requests between the frontend and the core are not necessary anymore and both components can have the database and the file storage as point of reference.
The core component can simply take all the unprocessed files and process them without expecting some special order from the front end, and the frontend can use its database as an index to find categorize and manipulate different files without being necessary to give a signal to the core, (the core will just detect any unprocessed files and it will process them).
### Design Item 1. Front-End, (not connected to the file storage)
Description: It is clear that the front end will be On a React.js Instance, and a special attention will be given to the responsive design, possibly with the use of responsive design. For now it is clear that firebase will be used as a database, at least for the users and the administrational data, and probably we will extend the database to the entirety of the data, as firebase is a NoSQL and it is recommended for large amounts of data.
Front end follows and single page architecture that displays different panels in the same page, keeping in that way a robust engine and improved security. Extra React components weren’t necessary yet, but they will probably be used in the future for reasons of advanced display.
The front end is designed to be used as a roadmap or as a dictionary for the whole system as the json file that is manipulated by the front end can serve as an indicator for the other parts of the system on how to perform.
The basic idea is that the front end is responsible for the user access and the CRUD of at least the FCA files, that are the files that are uploaded by the user. The system offers 2 roles, (the role of the admin of the user), and while both admin and the user can manipulate their own FCA files, the admin is meant to be able to manipulate the users and the whole range of FCA files around the system.
The different parts of the front end are separated as different React.js components, thing that reduces and redundancy or repetition, and accelerates the development of the system.
### Design Item 2. Back-End, (Discarded)
Description: Back End is expected to be A Python instance, capable to handle HTTP requests, in order to be able to serve as a standalone backend server with the ability to receive, process and return large amounts of data in different forms.
It is expected that the Python instance will be formatted inside a GitHub repository, so it will be able to be cloned inside a VM, (Linux probably), and with the support of Server Software that is not specified yet.
The Python part of the design consists of python server that utilizes sockets to handle http request. At the same time, effort is given to build a core module, (Design Item 5. Core), that will handle the machine learning and the heavy computational load of the system. Having the computational parts as a separated module, releases the computation from any web dependency and makes it possible to use the same functionality to other python instances.

### Design Item 3. File Storage, (needs to be implemented)
Description: File storage is the component that wasn’t implemented by us, and it is good idea to be implemented, if a web version of the system is still desired. The implementation needs to be a “firebase storage” service that is offered by google, so the database and the storage will share the same server. It may be considered a good idea to have 2 different services, as this can offer different credentials and not a single point of access, but we don’t recommend that, as the system needs to be robust and simple, and something that includes multiple keys and services, can cause a problem. So we highly recommend a firebase storage service. We might offer a solution about that in the future, in the form of snippet, instructions, or an implemented feature, so please be kind to check our repository before you take any decision.
### Design Item 4. Database
Description: Database has to have 2 different functionalities, namely the storage of the processed data, and the storage of user credentials. Because the different functionalities have different requirements for reliability and performance, the use of two different databases may be recommended. The Database component need to have interface on both front- and backend. At the moment the selected database for our needs is Google Firebase.
### Design Item 5. Core
Description: A good practice is to use a dedicated component for the heavy computational tasks without having it dependent on the web structure of the system. That means that even if the web component of the system gets discarded or updated in the future, the core module can be used by itself by different applications.
During the efforts to proceed with the project, a decision was made to proceed with the core component of the system as it can server as the “core” component of the system, the heart of the ML calculations and of course as a tool that can be detached and be used independently of the web structure of the system.
The idea of the Core is to build a system around the three “helper files” that we received from the predecessors of this project, and that we include in the repository, separately exactly as we received them, but also, in their improved windows bug free and windows friendly version that we use inside the core instance.
The core instance is a PyCharm python project with 4 files in total main.py which works as a shell program for the other 3 files, and the other 3 files that are managing specific tasks, of processing and analyzing the data. Namely we have:
1. fcsprepstep1.py that needs to run first. This python module, cleans and preprocess the raw data from the .fca files and stores the final data in the form of .csv files.
2. heatmapgen.py that needs to run second. This python module generates a heatmap from the preprocessed data.
3. differences.py which needs to run last. This module makes a very interesting analysis, as it takes 2 sequential preprocessed sample files and generates a new file that represents their distances. This functionality can help the ML algorithm to analyze, not only the composition of the samples, but also their transition from the one sample to the other, (in the case that the samples are taken from the same water sample in timed order).

The core also utilizes 5 folders inside the data folder, namely the folders diff, gated, heatmap, raw and transformed. The modules explain how they use each folder, but there is a folder that needs to be taken into consideration. The most important folder of the core project inside the data folder is the rawdata because it is the place where the raw fca files will be inserted in order to run the processes of the core component. The fca files with the raw data need to be given to the system with the following title format:

    -<text description about the place>_<id number without letters>_<test description about the time of the sampling>.fca

Failing to provide the raw data fca files with adequate naming, will cause the system to throw an error and stop.

### Design Item 6. FCA to CSV Pipeline, (Discarded)
Description: While the primary objective of the pipeline is to generate CSV files from the uploaded FCA files automatically, this idea can be expanded to other parts of the data preparation. It is a sane strategy to activate the preparation of the data automatically without the need of user intervention and having this type of calculation to a different and independent component releases the necessary resources for the on demand calculations that the system needs to perform. The Pipeline component got discarded from the design as it got replaced by the functionality of the core component.

## Conclusion
The potential of Flow Cytometry Analysis for the purpose of determining if a water sample is contaminated or not, is both undisputed and great, and it is believed that it is a matter of time before this type of solution is implemented in real life production.
The main challenge of this approach is, that a novel type of AI/ML model is needed to conclude the determination and the amount of data is still either small or unorganized, so, a specific approach of collecting and preparing the data needs to be implemented.
A software solution that solves the logistic issues of the collection and the preparation of the data, makes the process more effective, and while the use of different ML algorithms is possible in an intuitive way, that may accelerate, or lead directly to the desired solution.
Understandably this project is a work in progress that might take a long time before it gives results, the process of classification, encapsulation, and refinement of the different components of the system, it is the decisive factor ta is going to help the future research around, FCA analysis on different projects.

## Appendix. Making use of the code
The code in our repository Is structured in a way that the code can be used almost instantly after the repository is cloned., as we keep the use of gitignore only for the very sensitive parts of the code, (eg credentials). The rest of the code, (including modules and the necessary documentation), are included in the repository. An example of a type of files that is usually missing in the repository are the json files as they usually contain credentials or sensitive data, that cannot be displayed in a public repository.

### Installation of the frontend
It is always a complex process when it comes to web applications, and our frontend is one of these. Our frontend should be considered a stack as it contains different technologies that are stacked and working together as one system. These technologies are Node Js, Express js, React js, and Firebase, (Google services), database. The MongoDB option never used by us, but we still call the stack MERN, even if logically we should call it FERN or GERN, for reasons of convenience.
The installation of the front end, can be done, by copying and pasting the instance folder, (it is called frontend), or use it directly from the local repository directory. Going to its root directory, (the frontend folder), and by adding the generated firebase security key “admin.json”, to the root folder, in order for our system to gain access to the google services. After adding the key, the frontend is ready to run. If no changes took place in the source file of the frontend and no compiling is needed, we can run the frontend with “npm start” a command that cloud services like Heroku are using. If changes are taking place to the frontend and the frontend needs compiling , “npm run dev” can run the server after recompiling the source code.

### Installation of the Core
The core as mentioned above is the component that takes cares of the heavy calculations and it consists of 3 python modules that we refer to them as helper files, and a main module that just centralizes the control of the other modules. By default, if you wish to just run the core and have your raw fca data processed , the only thing that you have to do is to run the main. Upon a closer inspection on main module, it can be clear, that the core can run under any configuration and use any functionality possible. That is the reason why we have it that way.

The core instance is a PyCharm python project with 4 files in total main.py which works as a shell program for the other 3 files, and the other 3 files that are managing specific tasks, of processing and analyzing the data. Namely we have:
1. fcsprepstep1.py that needs to run first. This python module, cleans and preprocess the raw data from the .fca files and stores the final data in the form of .csv files.
2. heatmapgen.py that needs to run second. This python module generates a heatmap from the preprocessed data.
3. differences.py which needs to run last. This module makes a very interesting analysis, as it takes 2 sequential preprocessed sample files and generates a new file that represents their distances. This functionality can help the ML algorithm to analyze, not only the composition of the samples, but also their transition from the one sample to the other, (in the case that the samples are taken from the same water sample in timed order).

The core also utilizes 5 folders inside the data folder, namely the folders diff, gated, heatmap, raw and transformed. The modules explain how they use each folder, but there is a folder that needs to be taken into consideration. The most important folder of the core project inside the data folder is the rawdata because it is the place where the raw fca files will be inserted in order to run the processes of the core component. The fca files with the raw data need to be given to the system with the following title format:

    -<text description about the place>_<id number without letters>_<test description about the time of the sampling>.fca

Failing to provide the raw data fca files with adequate naming, will cause the system to throw an error and stop.
### The previous project
Inside our repository you will find a folder with the title “the old project” that contains the work of the previous team. In this folder you will find the code of their 2 repositories and their report, (be kind to read it). The code inside the folder might be edited or improved, but if you wish to see their initial work in their repositories:
https://github.com/karthi13/Water-Treatment-Backend
For Backend, and
https://github.com/karthi13/Flow-Cytometry-Analysis
For the Frontend. Please be kind to credit them.
FCA Water Project, (2022), Kristianstad University
How to proceed
At this point it is difficult to say how we will have proceeded with the working with this project, so the best idea is to visit and clone our repository:
https://github.com/Exarchias/FCAproject
And run the different instances, (especially the core), to get and idea of our progress. Also, a good idea is to communicate with us if you have any questions or if you need our support.
An email to contact us can be the one of Robert Alm, who is the owner of the repository:
RobertKristianAlm@gmail.com
A good plan is to implement, (if you aim for a web-based system), to connect a Firebase File storage with the frontend and the core, (check if we have implemented it already). If you aim to implement an offline, (on premise), tool, then just take the core instance and start working with it. Also, you need to find a way to make matrices that represent heatmaps, to images that represent these heatmaps, in order to be feed the images to a pattern recognition algorithm. Don’t forget that the system already generates heatmaps, so you only need to turn them into images.
Good Luck and Have Fun!
## References
[1] R. Alm, L. Imeri and V. Singh, "FCA Project. Github Repository," Kristianstad University, [Online]. Available: https://github.com/Exarchias/FCAproject. [Accessed 24 June 2022].
[2] United Nation, "Transforming our world: the 2030 Agenda for Sustainable Development," 25 September 2015. [Online]. Available: https://sdgs.un.org/2030agenda. [Accessed 30 May 2022].
[3] Wikipedia, "Flow cytometry," [Online]. Available: https://en.wikipedia.org/wiki/Flow_cytometry. [Accessed 30 May 2022].
[4] D. Aloom, K. Deenadayalan, R. Nagilla and R. Janulis, "Flow Cytometry Analysis," [Online]. Available: https://github.com/karthi13/Flow-Cytometry-Analysis. [Accessed 24 June 2022].