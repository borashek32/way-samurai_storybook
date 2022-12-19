test("should take old men older than 90", () =>{
    const ages = [5, 8, 34, 37, 100, 15, 67];

    // длинная запись
    // const predicate = (age: number) => {
    //     return age > 90;
    // }
    // покороче
    // const predicate = (age: number) => age > 90

    // the best
    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});

test("should take cources cheaper than 160", () => {
    type courseType = {
        title: string,
        price: number
    }

    const courses: Array<courseType> = [
        {title: "Sass", price: 200},
        {title: "Css", price: 100},
        {title: "js", price: 500},
        {title: "php", price: 300}
    ];

    // длинная запись
    // const cheapPredicate = (course: CourceType) => {
    //     return course.price < 160;
    // }
    // покороче
    // const cheapPredicate = (course: CourceType) => course.price < 160;

    // the best
    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(1);
    expect(cheapCourses[0].price).toBe(100);
    expect(cheapCourses[0].title).toBe("Css");
});

test("get only completed tasks", () => {
    type tasksType = {
        title: string
        isDone: boolean
    }

    const tasks: Array<tasksType> = [
        {title: 'milk', isDone: false},
        {title: 'bread', isDone: true},
        {title: 'salt', isDone: true},
        {title: 'tea', isDone: false}
    ]

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('bread');
    expect(completedTasks[1].title).toBe('salt');
});

test("get only uncompleted tasks", () => {
    type tasksType = {
        title: string
        isDone: boolean
    }

    const tasks: Array<tasksType> = [
        {title: 'milk', isDone: false},
        {title: 'bread', isDone: true},
        {title: 'salt', isDone: true},
        {title: 'tea', isDone: false}
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone); // task.isDone === false

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe('milk');
    expect(uncompletedTasks[1].title).toBe('tea');
});

export {}