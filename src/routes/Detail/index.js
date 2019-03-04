import React, { PureComponent } from 'react';
import { ContainerQuery } from 'react-container-query';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

export default class Index extends PureComponent {
  render() {
    return (
      <DocumentTitle title="这是DocumentTitle">
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>这是内容</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}
