
descricoes = {
    "C#": "C# is a modern, object-oriented, general-purpose programming language developed by Microsoft. It is widely used for developing Windows applications, mobile apps, games, and enterprise applications. C# is known for its safety, performance, and integration with the Microsoft .NET platform.",
    ".NET": ".NET is a powerful and versatile platform that allows developers to create modern, scalable applications for different platforms using programming languages like C#. It leverages advanced libraries and features provided by the platform.",
    "Windows": "Windows is a popular and widely used operating system that provides a reliable and powerful platform for running applications and services on personal computers. It is designed to deliver an intuitive user experience and is constantly updated to meet the needs and demands of users.",
    "GIT": "Git is a powerful version control system that offers advanced features such as efficient branching and merging, change tracking, complete history, and more. It facilitates team collaboration, work organization, and maintaining a comprehensive record of changes over time.",
    "Javascript": "JavaScript is a versatile and powerful programming language with a large developer community and a vast array of resources available. It plays a key role in building modern and interactive web applications.",
    "MySQL": "MySQL is a relational database management system (RDBMS) that uses the Structured Query Language (SQL) to manage and manipulate data. It was initially developed by MySQL AB and later acquired by Oracle Corporation."
}




function mostrarDescricao(tec) {
    document.getElementById("prof-name").innerHTML = tec;
    document.getElementById("descricao").innerHTML = descricoes[tec];
}

