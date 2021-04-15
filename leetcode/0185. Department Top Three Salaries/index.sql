SELECT
    Department.Name as Department,
    a.Name as Employee,
    a.Salary
FROM
    (
        select
            e.*,
            dense_rank() over (
                partition by DepartmentId
                order by
                    Salary desc
            ) rank
        from
            Employee e
    ) a
    left join Department ON (a.DepartmentId = Department.Id)
where
    a.rank <= 3
    AND Department.Id IS NOT NULL