/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  WidgetPersistor,
  WidgetStore,
} from '@usc-widget/types/index.store';
import {
  IUscProps,
} from './components/usc-root/usc-root';

export namespace Components {
  interface UscOutlet {
    /**
    * Continue shopping
    */
    'continueShopping': (btn: HTMLUscShoppingButtonElement) => Promise<void>;
    'getStore': () => Promise<WidgetStore>;
    /**
    * Hides usc
    */
    'hideUsc': () => Promise<void>;
    /**
    * Start shopping
    */
    'startShopping': (btn: HTMLUscShoppingButtonElement) => Promise<void>;
    /**
    * Start shopping by SCU
    */
    'startShoppingByScu': (el: HTMLElement, key?: string) => Promise<void>;
    /**
    * The theme name
    */
    'theme': string;
  }
  interface UscRoot {
    'renderUsc': (props: IUscProps, store: WidgetStore, persistor: WidgetPersistor) => Promise<void>;
  }
  interface UscShoppingButton {
    /**
    * The theme name
    */
    'theme': string;
  }
}

declare global {


  interface HTMLUscOutletElement extends Components.UscOutlet, HTMLStencilElement {}
  var HTMLUscOutletElement: {
    prototype: HTMLUscOutletElement;
    new (): HTMLUscOutletElement;
  };

  interface HTMLUscRootElement extends Components.UscRoot, HTMLStencilElement {}
  var HTMLUscRootElement: {
    prototype: HTMLUscRootElement;
    new (): HTMLUscRootElement;
  };

  interface HTMLUscShoppingButtonElement extends Components.UscShoppingButton, HTMLStencilElement {}
  var HTMLUscShoppingButtonElement: {
    prototype: HTMLUscShoppingButtonElement;
    new (): HTMLUscShoppingButtonElement;
  };
  interface HTMLElementTagNameMap {
    'usc-outlet': HTMLUscOutletElement;
    'usc-root': HTMLUscRootElement;
    'usc-shopping-button': HTMLUscShoppingButtonElement;
  }
}

declare namespace LocalJSX {
  interface UscOutlet {
    /**
    * The theme name
    */
    'theme'?: string;
  }
  interface UscRoot {}
  interface UscShoppingButton {
    /**
    * The theme name
    */
    'theme'?: string;
  }

  interface IntrinsicElements {
    'usc-outlet': UscOutlet;
    'usc-root': UscRoot;
    'usc-shopping-button': UscShoppingButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'usc-outlet': LocalJSX.UscOutlet & JSXBase.HTMLAttributes<HTMLUscOutletElement>;
      'usc-root': LocalJSX.UscRoot & JSXBase.HTMLAttributes<HTMLUscRootElement>;
      'usc-shopping-button': LocalJSX.UscShoppingButton & JSXBase.HTMLAttributes<HTMLUscShoppingButtonElement>;
    }
  }
}


