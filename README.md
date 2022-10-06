# sql-editor-react
A basic SQL editor on react
# description
A basic sql editor which takes input sql from the users and display the results
in the tabular form, Currently the results and query are not inline. This is just
to show the UI part of app. Also I have not spent much time on UI or layout of page
just focused on the functionality.

For a data analyst it is always better to preview what tables are available, So I added a tree structure for available tables.
Also for handling the larger number of rows in table I used virtualscroll tale so that browser does not hang rendering large chunks of data.

# Demo Link
demo: [DEMO] (https://sql-editor-react-1ztk-shahzaibsaleem.vercel.app/)

# Technologies Used:

1 - React: used for creating the application

2 - Prime Tables: used for displaying the query results with ***virtual scroll*** to render a big amount of rows without affecting browser

3 - Prime Tree: used for displaying the available tables for ease of users

4 - Papaparse: used for parsing the csv to json format

5 - @uiw/react-textarea-code-editor: used as a input box for queries for better query formatting.

# Performance
Performance of the app is measured through Lighthouse and Pagespeed, below are the values measured.

**Lighthouse**

1 - performance - 70

2 - Accessibility - 82

3 - Best Practices - 100

4 - First paint - 0.3s

5 - Time to interactive - 1.8s

6 - Largest contentful paint - 1.8s

**PageSpeed**

1 - performance - 80

2 - First paint - 0.3s

3 - Time to interactive - 1.1s

4 - Largest contentful paint - 1.1s

5 - Speed Index - 1.5s



# Installation

1 - npm install

2 - npm build && npm start
