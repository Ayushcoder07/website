#include<stdio.h>
int main()
{
    int arr1[50]={0},arr2[50]={0},arr3[50]={0},i,n,m,l;
    printf("enter range");
    scanf("%d%d",&n,&m);
    for(i=0;i<=n-1;i++)
    {
        scanf("%d",&arr1[i]);
    }
    for(i=0;i<=m-1;i++)
    {
        scanf("%d",&arr2[i]);
    }
    if(m>n)
    {
    	l=m;
	}
	else{
		l=n;
	}
    for(i=0;i<=l-1;i++)
    {
        arr3[i]=arr2[i]+arr1[i];
        printf("%d",arr3[i]);
    }
    return 0;
}