@echo off

REM Set Timestamp
FOR /F %%a IN ('WMIC OS GET LocalDateTime ^| FIND "."') DO SET DTS=%%a
SET TIMESTAMP=%DTS:~0,8%_%DTS:~8,6%

REM Print Timestamp
ECHO %TIMESTAMP%