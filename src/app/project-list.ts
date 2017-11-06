import { Project } from './project';

export const PROJECTS: Project[] = [
 { 
     id: 1, 
     name: 'React', 
     description: 'A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read', 
     link: 'github.com/gbraide/project-myreads' },
 { 
     id: 2, 
     name: 'React w/ Redux', 
     description: "A content and comment web app.  Users are able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users are also able to edit and delete posts and comments", 
     link: 'github.com/gbraide/project-readable' 
},
 { 
     id: 3, 
     name: 'Angular', 
     description: 'A portfolio site that displays recent projects', 
     link: 'github.com/gbraide/gbraide.github.io/tree/dev' }
];