using EStoreWebApp.Entities;
using EStoreWebApp.Service;
using Microsoft.AspNetCore.Mvc;

namespace EStoreWebApp.Controllers;

public class ProductController:Controller{

    private readonly ProductService svc=new ProductService();

    public ProductController(){
        Console.WriteLine("In product controller------------------------->");
    }
    public IActionResult GetAll(){
        List<Product>products=svc.GetAll();
        return View(products);
    }

    public IActionResult Details(int Id){

        return View(svc.GetById(Id));
    }

    public IActionResult Delete(int Id){
        svc.Delete(Id);
        return RedirectToAction("GetAll","Product");
    }

   
    public IActionResult AddForm(){
        return View();
    }

    
    public IActionResult Add(Product p){
        svc.AddProduct(p);
        return RedirectToAction("GetAll","Product");
    }

    public IActionResult Update(Product p){
        Console.WriteLine("----------------------controller update"+p);
        svc.Update(p);
        return RedirectToAction("GetAll","Product");
    }

    public IActionResult EditForm(int Id){
        Product p= svc.GetById(Id);
        Console.WriteLine("in update--------------------------->"+p);
        return View(p);
    }

}