using EStoreWebApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace EStoreWebApp.Repositories;

public class CollectionContext:DbContext{

    public DbSet<Product> Products{get;set;}

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        string ConnectionString=@"server=localhost; port=3306; user=root; password=root123; database=dotnet";
        optionsBuilder.UseMySQL(ConnectionString);
    }




}