using EStoreWebApp.Entities;
using EStoreWebApp.Repositories;

namespace EStoreWebApp.Service;

public class ProductService : IProductService
{
    private ProductDbManager mgr=new ProductDbManager();

    public ProductService(){
        Console.WriteLine("In product service----------------------------->");
    }

    public bool AddProduct(Product p)
    {
        mgr.AddProduct(p);
        return true;
        throw new NotImplementedException();
    }

    public bool Delete(int PId)
    {   
        mgr.Delete(PId);
        return true;
        throw new NotImplementedException();
    }

    public List<Product> GetAll()
    {   
        return mgr.GetAll();
        throw new NotImplementedException();
    }

    public Product GetById(int PId)
    {   
        return mgr.GetById(PId);
        throw new NotImplementedException();
    }

    public bool Update(Product p)
    {   
        mgr.Update(p);
        return true;
        throw new NotImplementedException();
    }
}