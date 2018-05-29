function startNewDay()
{
    cash += income;
    fans += fansIncome;
    currentDay++;
    if (currentDay % 30 === 0) {
     cash += income;
    }
    updateVariables();
}