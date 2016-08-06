def insideBar = if (high[0] <= high[1] && low[0] >= low[1]) then yes else no;
def greenBar = close > open;

plot insideBarFlag = Double.NaN;
insideBarFlag.SetDefaultColor(GetColor(1));
insideBarFlag.DefineColor("insidebarcolor", Color.CURRENT);
AssignPriceColor(if insideBar then if greenBar then Color.cyan else  Color.dark_ORANGE else Color.CURRENT);

