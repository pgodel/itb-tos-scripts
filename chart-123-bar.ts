# name: A0_123

def insideBar = if (high[0] <= high[1] && low[0] >= low[1]) then yes else no;
def outsideBar = if (high[0] > high[1] && low[0] < low[1]) then yes else no;
def twoUBar = if (outsideBar != yes && high[0] > high[1]) then yes else no;
def twoDBar = if (outsideBar != yes && low[0] < low[1]) then yes else no;

def greenBar = close > open;

plot insideBarFlag = Double.NaN;
insideBarFlag.SetDefaultColor(GetColor(1));
insideBarFlag.DefineColor("insidebarcolor", Color.CURRENT);
AssignPriceColor(if greenBar then Color.green else Color.red);
AssignPriceColor(if insideBar then if greenBar then Color.cyan else Color.dark_ORANGE else Color.CURRENT);
AssignPriceColor(if outsideBar then if greenBar then Color.blue else Color.magenta else Color.CURRENT);
AssignPriceColor(if twoUBar then Color.GREEN else Color.CURRENT);
AssignPriceColor(if twoDBar then Color.Red else Color.CURRENT);