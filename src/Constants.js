export const predefinedQueries = [
    {
        name: 'All Users',
        query: 'Select * from Users;'
    },
    {
        name: 'All Orders',
        query: 'Select * from Orders;'
    },
    {
        name: 'Top 5 orders',
        query: 'Select * from Orders order by time desc limit 5;'
    },
    {
        name: 'Top returning customers',
        query: 'Select * from CustomerDetails order by time desc limit 5;'
    },
    {
        name: 'Top selling products',
        query: 'Select * from ProductDetails order by count desc limit 5;'
    }
]

export const csvPaths = [
    'orders.csv',
    'products.csv',
    'order_details.csv'
]

export const tableInfo = [
    {
        "key": "0",
        "label": "Orders",
        "data": "Orders",
        "children": [
        {
            "key": "0-0",
            "label": "ID - Integer",
            "data": "ID",
        },
        {
            "key": "0-1",
            "label": "Order Name - Varchar256",
            "data": "Order Name",
        },
        {
            "key": "0-2",
            "label": "Order Type - Integer",
            "data": "Order Type",
        }]
    },
    {
        "key": "1",
        "label": "Customers",
        "data": "Customers",
        "children": [
            {
                "key": "1-0",
                "label": "ID - Integer",
                "data": "ID",
            },
            { "key": "1-1", "label": "Name - Varchar256", "data": "Name" },
            { "key": "1-2", "label": "Address - Varchar256", "data": "Address" },
            { "key": "1-3", "label": "Phone - Varchar256", "data": "Phone" }]
    },
    {
        "key": "2",
        "label": "Products",
        "data": "Products",
        "children": [
        {
            "key": "2-0",
            "label": "ID - Integer",
            "data": "ID",
        },
        {
            "key": "2-1",
            "label": "Title - Varchar256",
            "data": "Title",
        },
        {
            "key": "2-2",
            "label": "Description - Varchar256",
            "data": "Description",
        }]
    }
]
