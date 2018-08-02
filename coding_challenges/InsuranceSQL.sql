SELECT
    ROUND(SUM(INSURANCE_2012), 2)
FROM
    INSURANCE
WHERE
    PID IN (
    SELECT
        TIV_2011_DISTINCT.PID
    FROM
        (
            SELECT
                lat, lon
            FROM
                INSURANCE
            GROUP BY
                lat, lon
            HAVING
                COUNT(*) = 1
        ) AS CITY_DISTINCT

        INNER JOIN
        (
            SELECT
                *
            FROM
                INSURANCE
            WHERE
                TIV_2011 IN
                (SELECT TIV_2011 FROM INSURANCE GROUP BY TIV_2011 HAVING COUNT(*) > 1)
        ) AS TIV_2011_DISTINCT

        ON CITY_DISTINCT.LAT = TIV_2011_DISTINCT.LAT
        )