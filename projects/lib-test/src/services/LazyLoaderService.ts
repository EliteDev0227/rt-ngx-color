
import { ApplicationRef, Compiler, Component, Injectable, Injector, NgModuleFactory, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LazyLoaderService {
  private _moduleMap: Map<string, any> = new Map<string, any>();

  constructor(private compiler: Compiler, private injector: Injector, private appRef: ApplicationRef) {
    
  }

  loadModule(path: any) {
    return (path() as Promise<NgModuleFactory<any> | Type<any>>)
      .then(elementModuleOrFactory => {
        if (elementModuleOrFactory instanceof NgModuleFactory) {
          // if ViewEngine
          console.log('view engine');
          return elementModuleOrFactory;
        } else {
          try {
            // if Ivy
            console.log('ivy');
            return this.compiler.compileModuleAsync(elementModuleOrFactory);
          } catch (err) {
            throw err;
          }
        }
      })
      .then(moduleFactory => {
        try {
          const elementModuleRef = moduleFactory.create(this.injector);
          const moduleInstance = elementModuleRef.instance;
          // console.log('moduleFactory', moduleFactory);
          // console.log('elementModuleRef', elementModuleRef);

          // const entryComponent = (moduleFactory.moduleType as any).entry;
          // console.log('entry component', entryComponent);

          // do something with the module...
          return elementModuleRef;
        } catch (err) {
          throw err;
        }
      });
  }

  // loadLazyCodeEditorModule() {
  //   console.log('loadLazyCodeEditorModule called');
  //   const key = 'RT_CODE_EDITOR';
  //   var module = this._moduleMap.get(key);
  //   if (module) {
  //     return new Promise(resolve => resolve(this.injector.get(module.RtCodeEditorService)));
  //   }

  //   return new Promise(resolve => {
  //     this.loadModule(() => import('../../../rt-ngx-color/src/public-api').then(m => {
  //       console.log('module loaded', m);
  //         module = m;
  //         this._moduleMap.set(key, module);
  //         return m.RtCodeEditorModule;
  //       }))
  //       .then(elementModuleRef => {
  //         const r = elementModuleRef.componentFactoryResolver;
  //         const cmpFactory = r.resolveComponentFactory(module.RtCodeEditorStarterComponent);
  //         const componentRef = cmpFactory.create(this.injector);
          
  //         this.appRef.attachView(componentRef.hostView);
  
  //         setTimeout(() => {
  //           resolve(this.injector.get(module.RtCodeEditorService));
  //         }, 100);
  //       });
  //   })
  // }
}

